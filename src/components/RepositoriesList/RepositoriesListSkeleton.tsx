import { Grid, Skeleton } from "@mui/material";

export const RepositoriesListSkeleton = () => {
  return (
    <Grid
      container
      direction={"column"}
      sx={{
        borderBottom: "1px solid lightgray",
        padding: 1,
      }}
    >
      <Skeleton animation="wave" width="300px" height="30px" />
      <Skeleton animation="wave" width="60px" height="15px" />
      <Grid container justifyContent={"end"} alignItems={"center"}>
        <Skeleton animation="wave" width="25px" height="35px" />
        <Skeleton animation="wave" width="10px" />
      </Grid>
    </Grid>
  );
};
