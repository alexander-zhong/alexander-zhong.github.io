import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function Menu() {
  const sections = ["About", "Portfolio"];
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    const sectionId = sections[newValue];
    const sectionElement = document.getElementById(sectionId.toLowerCase());
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        bgcolor: "transparent",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        textColor="primary"
        indicatorColor="primary"
        sx={{ bgcolor: "" }}
      >
        {sections.map((item: string) => (
          <Tab label={item} />
        ))}
      </Tabs>
    </Box>
  );
}
