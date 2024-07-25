import React from "react";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";

const App = () => {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      App
    </MantineProvider>
  );
};

export default App;
