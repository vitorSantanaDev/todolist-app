import { useMemo, useState } from "react";
import UUID from "uuid-random";
import { Alert, ScrollView, View } from "react-native";

import { Task } from "@components/Task";
import { Header } from "@components/Header";
import { AddButton } from "@components/AddButton";
import { QuantityOfTasks } from "@components/QuantityOfTasks";
import { TextInputComponent } from "@components/TextInputComponent";
import { PlaceholderEmptyToDoList } from "@components/PlaceholderEmptyToDoList";

import { theme } from "@theme/theme";
import { stylesSheet } from "./styles";

const styles = stylesSheet();

export function Home() {
  const [tasks, setTasks] = useState<
    { id: string; task: string; completed: boolean }[]
  >([]);

  const [taskDescription, setTaskDescription] = useState("");

  const numberOfTasksCompleted = useMemo(() => {
    return tasks.filter((task) => task.completed).length;
  }, [tasks]);

  function handleCompleteTask(taskID: string) {
    setTasks((prevState) => {
      const taskToBeCompletedIndex = prevState.findIndex(
        (task) => task.id === taskID
      );

      if (taskToBeCompletedIndex === -1) return prevState;

      const stateCopy = [...prevState];

      stateCopy[taskToBeCompletedIndex].completed =
        !stateCopy[taskToBeCompletedIndex].completed;

      return stateCopy;
    });
  }

  function handleDeleteTask(taskID: string) {
    const taskToBeDeleted = tasks.find((task) => task.id === taskID);

    if (!taskToBeDeleted) return;

    Alert.alert(`Do you want to remove the task ${taskToBeDeleted.task}?`, "", [
      {
        text: "Yes",
        onPress: () =>
          setTasks((prevState) =>
            prevState.filter((item) => item.id !== taskID)
          ),
      },
      { text: "No", style: "cancel" },
    ]);
  }

  function handleCreateTask(taskDescription: string) {
    const taskAlreadyExists = tasks.findIndex(
      (task) => task.task.toLowerCase() === taskDescription.toLowerCase()
    );

    if (taskAlreadyExists !== -1) {
      Alert.alert("Task already exists");
      return;
    }

    setTaskDescription("");
    setTasks((prevState) => [
      ...prevState,
      { id: UUID(), completed: false, task: taskDescription },
    ]);
  }

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
