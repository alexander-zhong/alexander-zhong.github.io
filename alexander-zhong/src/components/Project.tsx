import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface ProjectProps {
  projectName: string;
  projectImage: string;
  projectDescription: string;
}

const Project: React.FC<ProjectProps> = ({
  projectName,
  projectImage,
  projectDescription,
}) => {
  return (
    <Card sx={{ width: 500, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)" }}>
      <CardContent>
        <CardMedia
          sx={{
            height: 270,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            borderRadius: 1,
          }}
          image={projectImage}
          title={projectName}
        />
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ mt: 2, fontFamily: "bold" }}
        >
          {projectName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {projectDescription}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Project;
