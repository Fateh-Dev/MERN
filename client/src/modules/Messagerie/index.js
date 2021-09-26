/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
const Messagerie = () => <div>Messagerie</div>;

export default {
  routeProps: {
    path: "/Messagerie",
    component: Messagerie,
  },
  name: "Messagerie",
  icon: <QuestionAnswerIcon color='secondary' />,
};
