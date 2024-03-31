import "./Global/Styles.css";
import { grey } from "@mui/material/colors";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { AppRoutes } from "./routes";

const theme = createTheme({
  palette: {
    primary: grey,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
