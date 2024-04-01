import { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { ProfileInfo } from "../components/ProfileInfo/ProfileInfo";
import { Searchbar } from "../components/Searchbar";
import GitHubLogo from "../assets/images/GitHubLogo.png";
import { api } from "../lib/axios";
import { RepositoriesList } from "../components/RepositoriesList/RepositoriesList";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import SorryMessage from "../assets/images/sorrySearch.png";
import { useUserName } from "../Hooks/useUserContext";
import { ProfileResponseType, RepositoriesResponseType } from "../Global/Types";
import { ProfileInfoSkeleton } from "../components/ProfileInfo/ProfileInfoSkeleton";
import { RepositoriesListSkeleton } from "../components/RepositoriesList/RepositoriesListSkeleton";

export const Profile = () => {
  const [userInfo, setUserInfo] = useState<ProfileResponseType>();
  const [repositories, setRepositories] = useState<RepositoriesResponseType>(
    []
  );
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [sortBy, setSortBy] = useState<"name" | "stars">("stars");
  const [showNoResults, setShowNoResults] = useState<boolean>(false);

  const { user } = useUserName();

  useEffect(() => {
    api.get(`users/${user}`).then((response) => setUserInfo(response.data));
    api
      .get(`users/${user}/repos`)
      .then((response) => setRepositories(response.data));
  }, []);

  const filteredRepositories = repositories
    .filter((repo) =>
      repo.name.toLowerCase().startsWith(searchTerm.toLowerCase())
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

  useEffect(() => {
    setShowNoResults(filteredRepositories.length === 0 && searchTerm !== "");
  }, [filteredRepositories, searchTerm]);

  return (
    <Grid container justifyContent={"center"}>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        margin={2}
        marginBottom={6}
      >
        <img src={GitHubLogo} alt="GitHub Logo" style={{ height: "80px" }} />
        <Searchbar title={"Search for a GitHub user"} value={""} />
      </Grid>

      <Grid item xs={3}>
        {!userInfo ? (
          <ProfileInfoSkeleton />
        ) : (
          <ProfileInfo
            name={userInfo?.name || ""}
            email={userInfo?.email || ""}
            following={userInfo?.following || ""}
            followers={userInfo?.followers || ""}
            image={userInfo?.avatar_url || ""}
            bio={userInfo?.bio || ""}
          />
        )}
      </Grid>
      <Grid item xs={8} sx={{ borderLeft: "1px solid lightgray", padding: 2 }}>
        <Typography fontSize={30} align="center">
          Repositories
        </Typography>

        <Grid
          container
          justifyContent={"center"}
          sx={{ borderBottom: "1px solid lightgray", paddingBottom: 2 }}
        >
          <Searchbar
            title={"Search for a repository"}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Grid container justifyContent={"center"}>
            <Button
              sx={{
                textTransform: "none",
                borderBottom: "1px solid lightgray",
              }}
              onClick={() => {
                setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                setSortBy("name");
              }}
            >
              Name {sortBy === "name" && (sortOrder === "asc" ? "A-z" : "Z-a")}
            </Button>
            <Button
              sx={{
                textTransform: "none",
                borderBottom: "1px solid lightgray",
              }}
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
        </Grid>

        {showNoResults ? (
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <img src={SorryMessage} alt="Image of a sorry emoji face" />
            <Typography variant="body1" align="center" mt={2}>
              Sorry! No repository was found with that name. Please try a
              different search.
            </Typography>
          </Grid>
        ) : (
          <Grid container direction="column">
            {filteredRepositories.length > 0 ? (
              filteredRepositories.map((repository) => (
                <RepositoriesList {...repository} key={repository.name} />
              ))
            ) : (
              <RepositoriesListSkeleton />
            )}
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};
