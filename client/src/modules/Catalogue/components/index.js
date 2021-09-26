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
import CustomPaginationActionsTable from "./table";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
export function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color='primary'
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value='web'>Consommable</ToggleButton>
      <ToggleButton value='android'>Non-Consommmable</ToggleButton>
    </ToggleButtonGroup>
  );
}
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderTop: "10px solid #232369",
}));
const TableLine = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  padding: 10,
  "&:hover": {
    cursor: "pointer",
    background: "#F0F2FF",
  },
}));
const Detail = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  borderTop: "10px solid #232369",
}));
const SimpleContainer = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid direction='row' item xs={12}>
              <ColorToggleButton />
              <Stack></Stack>
              {/* <Button variant='contained' style={{ padding: 12 }}>
                Ajouter nouveau article
              </Button> */}
            </Grid>
            <Grid item xs={12}>
              {/* <Detail>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                  <TableLine sx={{}}>
                    <Grid item xs={12}>
                      {index}
                    </Grid>
                  </TableLine>
                ))}
              </Detail> */}
              <CustomPaginationActionsTable />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};
export default SimpleContainer;
