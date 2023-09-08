import { Dimensions, PixelRatio } from "react-native";

/**
 * @description It receives as a parameter a value that will be defined for the width, height, padding, margin and font of elements in the interface.
 * @returns Returns a number dynamically based on device size
 * @summary
 * This method performs a calculation
 * based on the width of the UI prototype. Seeking
 * first to know how many percent the pixel value received as
 * a parameter represents the size of the UI prototype.
 * After that we use the roundToNearestPixel method, to round the device width multiplied by parseFloat(widthUIPercent) / 100.
 * **/
const pixel = (valuePx: number) => {
  const prototypeWidth = 375;

  const widthPercent = (valuePx / prototypeWidth) * 100;

  const { width } = Dimensions.get("window");

  const screenPixel = PixelRatio.roundToNearestPixel(
    (width * parseFloat(String(widthPercent))) / 100
  );

  return screenPixel;
};

export const theme = {
  colors: {
    blue: "#4EA8DE",
    blueDark: "#1E6F9F",
    purpleDark: "#5E60CE",
    purple: "#8284FA",
    gray700: "#0D0D0D",
    gray600: "#1A1A1A",
    gray500: "#262626",
    gray400: "#333333",
    gray300: "#808080",
    gray200: "#D9D9D9",
    gray100: "#F2F2F2",
    danger: "#E25858",
  },
  fonts: {
    sizes: {
      xsmall: 12,
      small: 14,
      medium: 16,
    },
    lineHeight: 140,
    weight: {
      regular: "Inter-Regular",
      bold: "Inter-Bold",
    },
  },
  metrics: {
    pixel,
  },
};
