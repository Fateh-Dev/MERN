/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
const Magasin = () => <div>Magasin</div>;
export default {
  routeProps: {
    path: "/Magasin",
    component: Magasin,
  },

  name: "Magasin",
  icon: <ArchiveOutlinedIcon />,
};
