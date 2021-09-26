import React, { Fragment } from "react";
import "./App.css";
// import NavBar from "./components/layout/NavBar";
import SignInSide from "./components/auth/SignInSide";
import SignIn from "./components/auth/SignIn";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, orange } from "@mui/material/colors";

const globaleTheme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: green[500],
    },
  },
});
const App = () => (
  <ThemeProvider theme={globaleTheme}>
    <Fragment>
      <SignInSide />
      {/* <SignIn /> */}
    </Fragment>
  </ThemeProvider>
);

export default App;
