import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import NavBar from "./NavBar";

function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary'>
      {"Copyright © "}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <NavBar />

      <CssBaseline />
      <Container
        component='main'
        sx={{ mt: 8, mb: 2 }}
        maxWidth='sm'
      ></Container>
      <Box sx={{ flexGrow: 1 }} />
      <Box
        component='footer'
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth='sm' style={{ textAlign: "center" }}>
          <Typography variant='body1'>
            Gestion materials informatiques.
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
