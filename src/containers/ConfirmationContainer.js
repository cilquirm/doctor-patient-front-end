import React, { Fragment } from "react";

import NavBar from "../components/NavBar";
import Confirmation from "../components/Confirmation";

import "../styles/Confirmation.css";

const ConfirmationContainer = props => {
  return (
    <Fragment>
      <NavBar />
      <Confirmation
        doctor={props.doctor}
        confirmationInfo={props.confirmationInfo}
      />
    </Fragment>
  );
};

export default ConfirmationContainer;
