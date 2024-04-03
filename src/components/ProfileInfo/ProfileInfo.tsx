import { Avatar, Grid, Typography } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import { ProfileProps } from "../../Global/Types";

export const ProfileInfo = (props: ProfileProps) => {

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
        <Avatar
          alt="user photo"
          src={props.image}
          sx={{ width: 200, height: 200 }}
        />
      </Grid>

      <Typography align="center">{props.name}</Typography>

      <Typography color={"primary"} fontSize={11}>
        {props.bio}
      </Typography>

      <Grid container alignItems={"center"} justifyContent={"space-around"}>
        <Grid>
          <Typography color={"primary"} fontSize={11}>
            {props.followers}
          </Typography>
          <Typography>Followers</Typography>
        </Grid>

        <Grid>
          <Typography color={"primary"} fontSize={11}>
            {props.following}
          </Typography>
          <Typography>Following</Typography>
        </Grid>
      </Grid>

      {props.email ? (
        <Grid container alignItems={"center"}>
          <MailIcon />
          <Typography marginLeft={1} color={"primary"} fontSize={12}>
            {props.email}
          </Typography>
        </Grid>
      ) : null}
    </Grid>
  );
};
