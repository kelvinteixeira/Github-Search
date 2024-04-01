import { Grid, Skeleton } from "@mui/material";

export const RepositoriesListSkeleton = () => {
  return (
    <Grid
      container
      direction={"column"}
      sx={{
        padding: 1,
      }}
    >
      <Skeleton animation="wave" width="250px" height="30px" />
      <Skeleton animation="wave" width="60px" height="15px" />
      <Grid
        sx={{ borderBottom: "1px solid lightgray" }}
        container
        justifyContent={"end"}
        alignItems={"center"}
      >
        <Skeleton
          animation="wave"
          width="25px"
          height="35px"
          sx={{ marginRight: 1 }}
        />
        <Skeleton animation="wave" width="10px" />
      </Grid>
      <Skeleton animation="wave" width="250px" height="30px" />
      <Skeleton animation="wave" width="60px" height="15px" />
      <Grid
        sx={{ borderBottom: "1px solid lightgray" }}
        container
        justifyContent={"end"}
        alignItems={"center"}
      >
        <Skeleton
          animation="wave"
          width="25px"
          height="35px"
          sx={{ marginRight: 1 }}
        />
        <Skeleton animation="wave" width="10px" />
      </Grid>
      <Skeleton animation="wave" width="250px" height="30px" />
      <Skeleton animation="wave" width="60px" height="15px" />
      <Grid
        sx={{ borderBottom: "1px solid lightgray" }}
        container
        justifyContent={"end"}
        alignItems={"center"}
      >
        <Skeleton
          animation="wave"
          width="25px"
          height="35px"
          sx={{ marginRight: 1 }}
        />
        <Skeleton animation="wave" width="10px" />
      </Grid>
    </Grid>
  );
};
