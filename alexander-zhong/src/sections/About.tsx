import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-scroll";
import img from "../assets/picture.jpg";

function About() {
  return (
    <>
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
              sx={{ fontFamily: "bold" }}
            >
              Alexander Zhong
            </Typography>
            <Typography variant="body1" color="textSecondary">
              a student studying computer science at the University of British
              Columbia with Schulich Leader Scholarship
            </Typography>
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
