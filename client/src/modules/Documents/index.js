/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const Document = () => <div>Documents</div>;

export default {
  routeProps: {
    path: "/Document",
    component: Document,
  },

  name: "Documents",
  icon: <DescriptionOutlinedIcon />,
};
