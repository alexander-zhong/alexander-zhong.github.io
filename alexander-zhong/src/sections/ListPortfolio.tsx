import { Container, Typography } from "@mui/material";

interface ProjectProps {
  projectName: string;
  projectImage: string;
  projectDescription: string;
}

const Projects: ProjectProps[] = [
  {
    projectName: "Product101",
    projectImage: "",
    projectDescription: "Product Management Fellowship",
  },
  {
    projectName: "Headstarter Ai",
    projectImage: "",
    projectDescription: "SWE Fellowship",
  },
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

const ListPortfolio = () => {
  return (
    <>
      <Container sx={{ mt: 20 }}>
        <Typography variant="h2">My projects and experiences</Typography>
        <ul className="mt-8 md-8 list-disc pl-6 space-y-4">
          <span id="portfolio"></span>
          {Projects.map((pj) => (
            <Typography variant="body1">
              <li key={pj.projectName}>
                <Typography variant="body1">
                  {pj.projectName} - {pj.projectDescription}
                </Typography>
              </li>
            </Typography>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default ListPortfolio;
