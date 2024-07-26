import React from "react";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import MainPage from "./MainPage";

const App = () => {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <MainPage />
    </MantineProvider>
  );
};

export default App;
