import React, { Component } from "react";
//import { withRouter } from "react-router-dom";
import moment from "moment";

class Confirmation extends Component {
  render() {
    let aptTime = moment(
      this.props.confirmationInfo.confirmed.appointment
    ).format("LLLL");

    return (
      <div>
        <h1>CONFIRMATION PAGE </h1>

        <p>
          Hello {this.props.confirmationInfo.patient_name}, your appointment
          with Dr. {this.props.doctor.attributes.last_name} on {aptTime} has
          been confirmed.
        </p>
      </div>
    );
  }
} //end of functional component

export default Confirmation;
