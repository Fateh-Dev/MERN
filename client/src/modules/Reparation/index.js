/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import BuildCircleOutlinedIcon from "@mui/icons-material/BuildCircleOutlined";
const Reparation = () => <div>Maintenance</div>;

export default {
  routeProps: {
    path: "/Reparation",
    component: Reparation,
  },
  name: "Maintenance",
  icon: <BuildCircleOutlinedIcon color='secondary' />,
};
