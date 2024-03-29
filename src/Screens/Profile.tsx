import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { ProfileInfoCard } from "../components/ProfileInfoCard";
import { Searchbar } from "../components/Searchbar";
import GitHubLogo from "../assets/images/GitHubLogo.png";
import { api } from "../lib/axios";
import { ProfileInfoPanel } from "../components/ProfileInfoPanel";

type ProfileProps = {
  name: string;
  email: string;
  followers: string;
  following: string;
  avatar_url: string;
  bio?: string | null;
};

export const Profile = () => {
  const [user, setUser] = useState<ProfileProps>();

  useEffect(() => {
    api.get(`/${"kelvinteixeira"}`).then((response) => setUser(response.data));
    console.log(user);
  }, []);

  if (!user) {
    return null;
  }

  return (
    <Grid container alignItems={"center"}>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        margin={2}
        marginBottom={6}
      >
        <img src={GitHubLogo} alt="GitHub Logo" style={{ height: "80px" }} />
        <Searchbar />
      </Grid>

      <Grid container spacing={1}>
        <Grid item sx={{ margin: "3rem 0 0 7rem" }}>
          <ProfileInfoCard
            name={user.name}
            email={user.email}
            following={user.following}
            followers={user.followers}
            image={user.avatar_url}
            bio={user.bio || ""}
          />
        </Grid>

        <Grid item>
          <ProfileInfoPanel />
        </Grid>
      </Grid>
    </Grid>
  );
};
