import "./Global/Styles.css";
import { grey } from "@mui/material/colors";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { AppRoutes } from "./routes";
import { UserContext } from "./context/UserContext";
import { useState } from "react";

const theme = createTheme({
  palette: {
    primary: grey,
  },
});

function App() {
  const [user, setUser] = useState<string>("");
  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{user, setUser}}>
        <AppRoutes />
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
