/*

Control totale sur l utilisateur
surveille toutes les activite de l utilisateur
activer et desactiver l utilisateur
associer un profile pour l utilisateur

*/
/* eslint-disable import/no-anonymous-default-export */

import React from "react";
import PersonIcon from "@material-ui/icons/Person";
const Personnes = () => <div>Utilisateur</div>;

export default {
  routeProps: {
    path: "/Personnes",
    component: Personnes,
  },
  name: "Utilisateur",
  icon: <PersonIcon />,
};
