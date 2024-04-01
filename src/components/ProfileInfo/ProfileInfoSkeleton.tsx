import { Grid, Skeleton } from "@mui/material";

export const ProfileInfoSkeleton = () => {
  return (
    <Grid
      item
      container
      justifyContent={"center"}
      alignContent={"center"}
      direction={"column"}
      gap={3}
      sx={{ width: 300, padding: 2 }}
    >
      <Grid container justifyContent={"center"}>
        <Skeleton variant="circular" width={200} height={200} />
      </Grid>

      <Grid container justifyContent={"center"}>
        <Skeleton animation="wave" width="50%" />
      </Grid>

      <Grid>
        <Skeleton animation="wave" width="100%" />
        <Skeleton animation="wave" width="100%" />
        <Skeleton animation="wave" width="40%" />
      </Grid>

      <Grid container alignItems={"center"} justifyContent={"space-around"}>
        <Grid>
          <Skeleton animation="wave" width="20px" />
          <Skeleton animation="wave" width="100px" />
        </Grid>

        <Grid>
          <Skeleton animation="wave" width="20px" />
          <Skeleton animation="wave" width="100px" />
        </Grid>
      </Grid>

      <Grid container alignItems={"center"}>
        <Skeleton animation="wave" width="20px" sx={{ marginRight: 1 }} />
        <Skeleton animation="wave" width="200px" />
      </Grid>
    </Grid>
  );
};
