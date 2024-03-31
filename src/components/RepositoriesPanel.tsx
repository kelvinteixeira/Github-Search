import { Button, Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

type RepositoriesProps = {
  name: string;
  stargazers_count: number;
  language: string;
};

export const RepositoriesPanel = (props: RepositoriesProps) => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      direction={"column"}
      sx={{
        borderBottom: "1px solid lightgray",
        padding: 1,
      }}
    >
      <Button
        onClick={() => navigate("/repository")}
        className="button-repository"
        variant="text"
        sx={{
          display: "flex",
          justifyContent: "start",
          color: "gray",
          fontSize: 18,
          textDecoration: "underline",
        }}
      >
        {props.name}
      </Button>
      <Typography color={"primary"} fontSize={11} marginRight={2}>
        {props.language}
      </Typography>
      <Grid container justifyContent={"end"} alignItems={"center"}>
        <StarIcon sx={{ color: "#FFD700" }} />
        <Typography align="right" fontSize={11} color={"primary"}>
          {props.stargazers_count}
        </Typography>
      </Grid>
    </Grid>
  );
};
