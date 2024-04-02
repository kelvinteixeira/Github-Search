import { grey } from "@mui/material/colors";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { AppRoutes } from "./routes";
import { UserProvider } from "./context/UserContext";
import "./Global/Styles.css";

const theme = createTheme({
  palette: {
    primary: grey,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
