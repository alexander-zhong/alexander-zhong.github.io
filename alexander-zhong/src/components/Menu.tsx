import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function Menu() {
  const sections = ["About", "Portfolio"];
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event);
    setValue(newValue);
    const sectionId = sections[newValue];
    const sectionElement = document.getElementById(sectionId.toLowerCase());
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    let activeSection = value;

    sections.forEach((section, index) => {
      const sectionElement = document.getElementById(section.toLowerCase());
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          activeSection = index;
        }
      }
    });

    if (activeSection !== value) {
      setValue(activeSection);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        value={2}
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
