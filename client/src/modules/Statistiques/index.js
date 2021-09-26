import React from "react";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";

const Statistique = () => <div>Statistique Module</div>;

export default {
  routeProps: {
    path: "/Statistique",
    component: Statistique,
  },

  name: "Statistique",
  icon: <PieChartOutlineOutlinedIcon color='secondary' />,
};
