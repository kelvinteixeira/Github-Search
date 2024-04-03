import { Grid } from "@mui/material";
import { Searchbar } from "../components/Searchbar";
import GitHubLogo from "../assets/images/GitHubLogo.png";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

export const Home = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
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
      <Searchbar
        value={user?.name}
        onChange={(e) => setUser({ name: e.target.value })}
        title={"Search for a GitHub user"}
        onClick={() => {
          navigate("/profile");
        }}
        width={600}
      />
    </Grid>
  );
};
