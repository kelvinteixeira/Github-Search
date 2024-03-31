import { Button, Grid } from "@mui/material";
import { Searchbar } from "../components/Searchbar";
import GitHubLogo from "../assets/images/GitHubLogo.png";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
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
      <Searchbar title={"Search for a GitHub user"} />

      <Button
        onClick={() => navigate("/profile")}
        variant="contained"
        sx={{ textTransform: "none" }}
      >
        Search
      </Button>
    </Grid>
  );
};
