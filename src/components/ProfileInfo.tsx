import { Avatar, Grid, Typography } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

type ProfileCardProps = {
  name: string;
  email: string;
  following: string;
  followers: string;
  image: string;
  bio: string;
};

export const ProfileInfo = (props: ProfileCardProps) => {
  return (
    <Grid
      item
      container
      justifyContent={"center"}
      alignContent={"center"}
      direction={"column"}
      gap={3}
      sx={{ borderRight: "1px solid lightgrey", width: 300, padding: 2 }}
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