import { Button, Grid } from "@mui/material";
import PageNotFoundImage from "../assets/images/error404.png";
import { useNavigate } from "react-router-dom";

export const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      direction={'column'}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ height: "100vh" }}
    >
      <img src={PageNotFoundImage} alt="Error 404 page not found" />
      <Button
        onClick={() => navigate("/")}
        variant="contained"
        sx={{ textTransform: "none" }}
      >
        Back
      </Button>
    </Grid>
  );
};
