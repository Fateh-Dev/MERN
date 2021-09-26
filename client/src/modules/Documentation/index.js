/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import MenuBookIcon from "@material-ui/icons/MenuBook";
const Documentation = () => <div>Documentation</div>;

export default {
  routeProps: {
    path: "/Documentation",
    component: Documentation,
  },
  name: "Documentation",
  icon: <MenuBookIcon color='secondary' />,
};
