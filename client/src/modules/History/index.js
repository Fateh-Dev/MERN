/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import HistoryIcon from "@material-ui/icons/History";
const History = () => <div>Historique</div>;

export default {
  routeProps: {
    path: "/History",
    component: History,
  },
  name: "Historique",
  icon: <HistoryIcon color='secondary' />,
};
