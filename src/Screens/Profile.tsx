import { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { ProfileInfo } from "../components/ProfileInfo";
import { Searchbar } from "../components/Searchbar";
import GitHubLogo from "../assets/images/GitHubLogo.png";
import { api } from "../lib/axios";
import { RepositoriesInfo } from "../components/RepositoriesInfo";
import SearchIcon from "@mui/icons-material/Search";

import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

type ProfileProps = {
  name: string;
  email: string;
  followers: string;
  following: string;
  avatar_url: string;
  bio?: string | null;
};

type RepositoriesProps = {
  name: string;
  stargazers_count: number;
  language: string;
}[];

export const Profile = () => {
  const [user, setUser] = useState<ProfileProps>();
  const [repositories, setRepositories] = useState<RepositoriesProps>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortBy, setSortBy] = useState<"name" | "stars">("name");

  useEffect(() => {
    api.get(`/${"kelvinteixeira"}`).then((response) => setUser(response.data));
  }, []);

  useEffect(() => {
    api
      .get(`/${"kelvinteixeira"}/repos`)
      .then((response) => setRepositories(response.data));
  }, []);

  const filteredRepositories = repositories
    .filter((repo) =>
      repo.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "name") {
        return sortOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      } else {
        return sortOrder === "asc"
          ? a.stargazers_count - b.stargazers_count
          : b.stargazers_count - a.stargazers_count;
      }
    });

  return (
    <Grid container>
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

      <Grid item xs={3}>
        <ProfileInfo
          name={user?.name || ""}
          email={user?.email || ""}
          following={user?.following || ""}
          followers={user?.followers || ""}
          image={user?.avatar_url || ""}
          bio={user?.bio || ""}
        />
      </Grid>
      <Grid item xs={8}>
        <Typography fontSize={30} align="center">
          Repositories
        </Typography>

        <Grid
          container
          justifyContent={"space-between"}
          sx={{ borderBottom: "1px solid lightgray", paddingBottom: 2 }}
        >
          <FormControl variant="outlined">
            <InputLabel
              sx={{ fontFamily: "OstrichSansBlack !important" }}
              htmlFor="searchbar"
            >
              Search a repository
            </InputLabel>
            <OutlinedInput
              fullWidth
              sx={{
                width: 400,
                borderRadius: 5,
              }}
              id="searchbar"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
              label="Search a repository"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </FormControl>
          <Button
            sx={{ borderBottom: "1px solid lightgray" }}
            onClick={() => {
              setSortOrder(sortOrder === "asc" ? "desc" : "asc");
              setSortBy("name");
            }}
          >
            Name {sortBy === "name" && (sortOrder === "asc" ? "↑" : "↓")}
          </Button>
          <Button
            sx={{ borderBottom: "1px solid lightgray" }}
            onClick={() => {
              setSortOrder(sortOrder === "asc" ? "desc" : "asc");
              setSortBy("stars");
            }}
          >
            Stars{" "}
            {sortBy === "stars" &&
              (sortOrder === "asc" ? (
                <KeyboardDoubleArrowUpIcon />
              ) : (
                <KeyboardDoubleArrowDownIcon />
              ))}
          </Button>
        </Grid>

        {filteredRepositories.map((repository) => (
          <RepositoriesInfo {...repository} key={repository.name} />
        ))}
      </Grid>
    </Grid>
  );
};
