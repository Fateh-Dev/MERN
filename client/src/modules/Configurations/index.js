/* eslint-disable import/no-anonymous-default-export */
import React, { Fragment } from "react";
import SettingsIcon from "@material-ui/icons/Settings";

const Configurations = () => <Fragment>Catalogue</Fragment>;

export default {
  routeProps: {
    path: "/Configurations",
    component: Configurations,
  },
  name: "Configurations",
  icon: <SettingsIcon />,
};
