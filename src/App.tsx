import "./Global/Styles.css";
// import { Home } from "./screens/Home";
import { grey } from "@mui/material/colors";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { Profile } from "./screens/Profile";
import { RepositoryInfo } from "./screens/ReposityInfo";

const theme = createTheme({
  palette: {
    primary: grey,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Home /> */}
      {/* <Profile /> */}
      <RepositoryInfo/>
    </ThemeProvider>
  );
}

export default App;
