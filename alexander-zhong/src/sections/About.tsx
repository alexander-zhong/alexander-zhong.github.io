import { Box, Container, IconButton, Typography } from "@mui/material";
import { Link } from "react-scroll";
import img from "../assets/picture.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function About() {
  return (
    <>
      <span id="about"></span>
      <div className="mt-32">
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 2,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              flex: 1,
              mr: 2,
              mb: 8,
            }}
          >
            <Typography variant="h6" color="textSecondary">
              Hello! I am
            </Typography>
            <Typography
              variant="h2"
              component="div"
              sx={{
                fontFamily: "bold",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.18)",
              }}
            >
              Alexander Zhong
            </Typography>
            <Typography variant="body1" color="textSecondary">
              studying computer science at the University of British Columbia
              and is a Schulich Leader Scholar. Open for opportunities related
              to SWE and AI
            </Typography>
            <IconButton href="https://www.linkedin.com/in/alexanderzhong/">
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </Box>
          <Box
            component="img"
            src={img}
            alt="image"
            sx={{
              width: { xs: 380, md: 580 },
              borderRadius: "88px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.68)",
            }}
          />
        </Container>
      </div>
    </>
  );
}

export default About;
