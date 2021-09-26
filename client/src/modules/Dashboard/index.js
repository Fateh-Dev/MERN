import React, { Fragment } from "react";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
const Dashboard = () => <Fragment>Dashboard</Fragment>;
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  routeProps: {
    path: "/Dashboard",
    component: Dashboard,
  },
  name: "Dashboard",
  icon: <DashboardOutlinedIcon />,
};
