import { Button, Container, Grid, Link, Typography } from "@mui/material";
import { Searchbar } from "../components/Searchbar";
import GitHubLogo from "../assets/images/GitHubLogo.png";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import { useNavigate } from "react-router-dom";
import { useRepositoryName, useUserName } from "../Hooks/useUserContext";

type RepositoryInfoProps = {
  name: string;
  description: string;
  stargazers_count: number;
  language: string;
  html_url: string;
};

export const RepositoryInfo = () => {
  const [repositoryInfo, setRepositoryInfo] = useState<RepositoryInfoProps>();
  const navigate = useNavigate();
  const { user } = useUserName();
  const { repository } = useRepositoryName();

  useEffect(() => {
    api
      .get(`repos/${user}/${repository}`)
      .then((response) => setRepositoryInfo(response.data));
  }, []);

  return (
    <Container>
      <Grid
        container
        gap={3}
        justifyContent={"center"}
        sx={{ borderBottom: "1px solid lightgray" }}
      >
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          margin={2}
          marginBottom={6}
        >
          <img src={GitHubLogo} alt="GitHub Logo" style={{ height: "80px" }} />
          <Searchbar title={"Search for a GitHub user"} />
        </Grid>
        <Typography
          fontSize={30}
          marginBottom={5}
          sx={{ borderBottom: "1px solid lightgray" }}
        >
          Repository details
        </Typography>
        <Grid container>
          <Typography>Name: &nbsp;</Typography>
          <Typography color={"primary"}>{repositoryInfo?.name}</Typography>
        </Grid>
        <Grid container>
          <Typography>Total stars: &nbsp;</Typography>
          <Typography color={"primary"}>
            {repositoryInfo?.stargazers_count}
          </Typography>
        </Grid>
        <Grid container>
          <Typography>Description: &nbsp;</Typography>
          <Typography color={"primary"}>
            <Link
              href={repositoryInfo?.description}
              target="_blank"
              rel="noreferrer"
            >
              {repositoryInfo?.description}
            </Link>
          </Typography>
        </Grid>
        <Grid container>
          <Typography>Principal language: &nbsp;</Typography>
          <Typography color={"primary"}>{repositoryInfo?.language}</Typography>
        </Grid>
        <Grid container>
          <Typography>Repository link: &nbsp;</Typography>
          <Typography color={"primary"}>
            <Link
              href={repositoryInfo?.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {repositoryInfo?.html_url}
            </Link>
          </Typography>
        </Grid>
        <Button
          onClick={() => navigate("/profile")}
          variant="contained"
          sx={{ textTransform: "none", marginBottom: 2 }}
        >
          Back
        </Button>
      </Grid>
    </Container>
  );
};
