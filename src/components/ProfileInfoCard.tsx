import { Avatar, Grid,  Typography } from "@mui/material";
import { ProfileInfoPanel } from "./ProfileInfoPanel";

type ProfileCardProps = {
  name: string;
  email: string;
  following: string;
  followers: string;
  image: string;
};

export const ProfileInfoCard = (props: ProfileCardProps) => {
  return (
    <Grid container spacing={1}>
      <Grid
        item
        container
        direction={"column"}
        gap={2}
        sx={{ borderRight: "1px solid grey", width: 250, padding: 2 }}
      >
        <Grid>
          <Avatar
            alt="user photo"
            src={props.image}
            sx={{ width: 200, height: 200 }}
          />
        </Grid>

        <Grid>
          <Typography align="center">{props.name}</Typography>
        </Grid>

        <Grid container alignItems={"center"} justifyContent={"space-around"}>
          <Grid>
            <Typography fontSize={11}>{props.followers}</Typography>
            <Typography>Followers</Typography>
          </Grid>

          <Grid>
            <Typography fontSize={11}>{props.following}</Typography>
            <Typography>Following</Typography>
          </Grid>
        </Grid>
        <Grid container alignItems={"center"}>
          <Typography>{props.email}</Typography>
        </Grid>
      </Grid>

      <Grid item direction={"column"} gap={2}>
        <ProfileInfoPanel bio={"Bio da bexiga de grande aqui mermao"} />
      </Grid>
    </Grid>
  );
};
