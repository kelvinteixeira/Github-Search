import { Grid } from "@mui/material";
import { Searchbar } from "../components/Searchbar";
import GitHubLogo from "../assets/images/GitHubLogo.png";

export const Home = () => {
  return (
    <Grid
      sx={{ marginTop: 15 }}
      container
      direction={"column"}
      alignItems={"center"}
      gap={3}
    >
      <Grid>
        <img src={GitHubLogo} alt="GitHub Logo" style={{ height: "200px" }} />
      </Grid>
      <Searchbar />
    </Grid>
  );
};
