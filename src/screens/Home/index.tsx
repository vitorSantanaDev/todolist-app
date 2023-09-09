import { useEffect, useMemo, useState } from "react";
import UUID from "uuid-random";
import { Alert, ScrollView, View } from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

import { Task } from "@components/Task";
import { Header } from "@components/Header";
import { AddButton } from "@components/AddButton";
import { QuantityOfTasks } from "@components/QuantityOfTasks";
import { TextInputComponent } from "@components/TextInputComponent";
import { PlaceholderEmptyToDoList } from "@components/PlaceholderEmptyToDoList";

import { theme } from "@theme/theme";
import { stylesSheet } from "./styles";

type Task = {
  id: string;
  task: string;
  completed: boolean;
};

const styles = stylesSheet();

const TASK_STORAGE_KEY = "@todo:tasks";

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [taskDescription, setTaskDescription] = useState("");

  const { getItem, setItem } = useAsyncStorage(TASK_STORAGE_KEY);

  const numberOfTasksCompleted = useMemo(() => {
    return tasks.filter((task) => task.completed).length;
  }, [tasks]);

  async function handleCompleteTask(taskID: string) {
    try {
      const stateCopy = [...tasks];

      const taskToBeCompletedIndex = stateCopy.findIndex(
        (task) => task.id === taskID
      );

      stateCopy[taskToBeCompletedIndex].completed =
        !stateCopy[taskToBeCompletedIndex].completed;

      if (taskToBeCompletedIndex === -1) return taskToBeCompletedIndex;

      setTasks(stateCopy);

      await setItem(JSON.stringify([...stateCopy]));
    } catch (err) {
      console.log({ err, message: "Unable to complete your task!" });
      Alert.alert("Unable to complete your task!");
    }
  }

  async function handleDeleteTask(taskID: string) {
    try {
      const taskToBeDeleted = tasks.find((task) => task.id === taskID);

      if (!taskToBeDeleted) return;

      function confirmDeleteTask() {
        const newState = tasks.filter((task) => task.id !== taskID);
        setTasks(newState);

        (async () => {
          await setItem(JSON.stringify(newState));
        })();
      }

      Alert.alert(
        `Do you want to remove the task ${taskToBeDeleted.task}?`,
        "",
        [
          {
            text: "Yes",
            onPress: confirmDeleteTask,
          },
          { text: "No", style: "cancel" },
        ]
      );
    } catch (err) {
      console.log({ err, message: "Unable to delete your task!" });
      Alert.alert("Unable to delete your task!");
    }
  }

  async function handleCreateTask(taskDescription: string) {
    try {
      const taskAlreadyExists = tasks.findIndex(
        (task) => task.task.toLowerCase() === taskDescription.toLowerCase()
      );

      if (taskAlreadyExists !== -1) {
        Alert.alert("Task already exists");
        return;
      }

      const newTask = { id: UUID(), completed: false, task: taskDescription };

      setTaskDescription("");

      setTasks((prevState) => [...prevState, newTask]);

      const tasksAlreadyInTheDeviceMemory =
        await handleFetchDataStoredInTheDeviceMemory();

      if (!tasksAlreadyInTheDeviceMemory.length) {
        await setItem(JSON.stringify([newTask]));
        return;
      }

      await setItem(
        JSON.stringify([...tasksAlreadyInTheDeviceMemory, newTask])
      );
    } catch (err) {
      console.log({ err, message: "Unable to register your new task!" });
      Alert.alert("Unable to register your new task!");
    }
  }

  async function handleFetchDataStoredInTheDeviceMemory(): Promise<Task[]> {
    const response = await getItem();
    if (typeof response !== "string") return [];
    return JSON.parse(response) as Task[];
  }

  useEffect(() => {
    (async () => {
      const tasksAlreadyInTheDeviceMemory =
        await handleFetchDataStoredInTheDeviceMemory();

      if (tasksAlreadyInTheDeviceMemory.length) {
        setTasks(tasksAlreadyInTheDeviceMemory);
      } else {
        setTasks([]);
      }
    })();
  }, []);

  return (
    <ScrollView>
      <Header />
      <View style={styles.container}>
        <View style={styles.addNewTaskRow}>
          <TextInputComponent
            style={styles.textInput}
            placeholder="Add a new task"
            value={taskDescription}
            onChangeText={setTaskDescription}
          />
          <AddButton onPress={() => handleCreateTask(taskDescription)} />
        </View>
        <View style={styles.row}>
          <QuantityOfTasks
            quantity={numberOfTasksCompleted}
            label="Completed"
            labelColor={theme.colors.blue}
          />
          <QuantityOfTasks
            quantity={tasks.length}
            label="Created"
            labelColor={theme.colors.purple}
          />
        </View>
        {!tasks.length ? (
          <>
            <View style={styles.divider} />
            <PlaceholderEmptyToDoList />
          </>
        ) : (
          <>
            {tasks.map((task, index) => (
              <View
                key={task.id}
                style={{ marginBottom: index !== tasks.length - 1 ? 8 : 0 }}
              >
                <Task
                  description={task.task}
                  completed={task.completed}
                  onDeleteTask={() => handleDeleteTask(task.id)}
                  onClompleteTask={() => handleCompleteTask(task.id)}
                />
              </View>
            ))}
          </>
        )}
      </View>
    </ScrollView>
  );
}
