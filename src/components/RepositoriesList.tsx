import { Button, Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
import { useRepositoryName } from "../Hooks/useUserContext";

type RepositoriesProps = {
  name: string;
  stargazers_count: number;
  language: string;
};

export const RepositoriesList = (props: RepositoriesProps) => {
  const navigate = useNavigate();
  const {setRepository} = useRepositoryName()

  const handleClick = () => {
    setRepository(props.name)
    navigate('/repository')
  };
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
        onClick={handleClick}
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
