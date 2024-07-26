import React from "react";
import {
  useMantineColorScheme,
  useComputedColorScheme,
  Button,
  Group,
} from "@mantine/core";
import styles from "./ThemeButton.module.css";

const ThemeButton = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const toggleTheme = () => {
    setColorScheme(colorScheme === "light" ? "dark" : "light");
  };

  return (
    <>
      <label htmlFor="theme" className={styles.theme}>
        <span className={styles.theme__toggleWrap}>
          <input
            id="theme"
            className={styles.theme__toggle}
            type="checkbox"
            role="switch"
            name="theme"
            value="light"
            onChange={toggleTheme}
          />
          <span className={styles.theme__fill}></span>
          <span className={styles.theme__icon}>
            {[...Array(9)].map((_, index) => (
              <span key={index} className={styles.theme__iconPart}></span>
            ))}
          </span>
        </span>
      </label>
    </>
  );
};

export default ThemeButton;
