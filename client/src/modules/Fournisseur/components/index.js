import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderTop: "10px solid #232369",
}));
const Fournisseur = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  paddingLeft: 20,
  borderTopRightRadius: 5,
  borderBottomRightRadius: 5,
  borderLeft: "4px solid  #232369",
  padding: 15,
  "&:hover": {
    cursor: "pointer",
    background: "#F0F2FF",
    borderLeft: "4px solid  #5dcf0f",
  },
}));
const Detail = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  borderTop: "10px solid #232369",
  height: 500,
}));
const SimpleContainer = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item>
                <Grid item xs={12}>
                  <b>Fournisseurs</b>
                </Grid>
              </Item>
              <Box>
                <Autocomplete
                  disablePortal
                  id='combo-box-demo'
                  options={[
                    { label: "The Shawshank Redemption", year: 1994 },
                    { label: "The Godfather", year: 1972 },
                    { label: "The Godfather: Part II", year: 1974 },
                    { label: "The Dark Knight", year: 2008 },
                  ]}
                  sx={{ marginTop: 2, marginBottom: 2 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label='Tapez ici...'
                      variant='standard'
                    />
                  )}
                />
              </Box>
              {[
                "Fournisseur #1",
                "Fournisseur #2",
                "Fournisseur #3",
                "Fournisseur #4",
              ].map((item) => (
                <Fournisseur>
                  <Grid item xs={12}>
                    {item}
                  </Grid>
                </Fournisseur>
              ))}
            </Grid>
            <Grid item xs={8}>
              <Detail>xs=8</Detail>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};
export default SimpleContainer;
