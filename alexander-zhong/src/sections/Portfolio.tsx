import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import Project from "../components/Project";

interface ProjectProps {
  projectName: string;
  projectImage: string;
  projectDescription: string;
}

const Projects: ProjectProps[] = [
  {
    projectName: "SustainaLens",
    projectImage: "",
    projectDescription:
      "A cnn built to identify if trash items are recyclable or non-recyclable. Built with tensorflow and flask for backtesting",
  },
  {
    projectName: "Risk Firm Analysis",
    projectImage: "",
    projectDescription:
      "Knn classifier taking account of 3 risk factor variables to classify possible fradulent firms. 99.57% accuracy on the testing data. Utilized R with tidyverse.",
  },
  {
    projectName: "Budget Tracker",
    projectImage: "",
    projectDescription:
      "Object Oriented Application of a finance budget tracker. Built with java swing.",
  },
  {
    projectName: "PaperInvestments",
    projectImage: "",
    projectDescription:
      "A realtime papertrading platform built with flask, html, css",
  },
  {
    projectName: "Tic-Tac-Toe Robot",
    projectImage: "",
    projectDescription:
      "Unbeatable opponent implmented with minimax algorithm with incorporation of alpha-beta pruning and depth-limit minimax for user adjustment of difficulty levels. Built with python and pygame.",
  },
];

const Portfolio = () => {
  return (
    <>
      <span id="portfolio"></span>
      <Container sx={{ mt: 20 }}>
        <Typography variant="h2">My projects and experiences</Typography>
        <Grid container spacing={2} justifyContent="center" sx={{ mt: 8 }}>
          {Projects.map((pj) => (
            <Grid item>
              <Project
                projectName={pj.projectName}
                projectDescription={pj.projectDescription}
                projectImage={pj.projectImage}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Portfolio;
