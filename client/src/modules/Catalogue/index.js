import React, { Fragment } from "react";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import SimpleContainer from "./components";
const Catalogue = () => (
  <Fragment>
    <SimpleContainer />
  </Fragment>
);
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  routeProps: {
    path: "/Catalogue",
    component: Catalogue,
  },
  name: "Catalogue",
  icon: <LaptopMacIcon />,
};
