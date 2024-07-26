import React from "react";
import {
  useMantineColorScheme,
  useComputedColorScheme,
  Button,
  Group,
} from "@mantine/core";

const ThemeButton = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const toggleTheme = () => {
    setColorScheme(colorScheme === "light" ? "dark" : "light");
  };

  return <Button onClick={toggleTheme}>Change Theme</Button>;
};

export default ThemeButton;
