/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";

const A_Propos = () => <div>A propos</div>;

export default {
  routeProps: {
    path: "/A_Propos",
    component: A_Propos,
  },
  name: "A Propos",
  icon: <ContactSupportOutlinedIcon color='secondary' />,
};
