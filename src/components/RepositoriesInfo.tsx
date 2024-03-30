import { Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

type RepositoriesProps = {
  name: string;
  stargazers_count: number;
  language: string;
};

export const RepositoriesInfo = (props: RepositoriesProps) => {
  return (
    <Grid
      container
      direction={"column"}
      sx={{
        borderBottom: "1px solid lightgray",
        padding: 1,
      }}
    >
      <Typography fontSize={20}>{props.name}</Typography>
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
