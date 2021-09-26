/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import SimpleConntainer from "./components";
const Fournisseur = () => <SimpleConntainer />;

export default {
  routeProps: {
    path: "/Fournisseur",
    component: Fournisseur,
  },
  name: "Fournisseurs",
  icon: <AddShoppingCartOutlinedIcon />,
};
