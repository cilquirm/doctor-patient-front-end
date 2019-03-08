import React, { Fragment } from "react";
import moment from "moment";
import { withRouter } from "react-router-dom";

import "../styles/Confirmation.css";

const Confirmation = props => {
  function newAppointment() {
    props.history.push("/specialists");
  }

  let aptTime = moment(props.confirmationInfo.confirmed.appointment).format(
    "LLLL"
  );

  return (
    <Fragment>
      <div className="confirmation">
        <img
          src="http://localhost:3000/hot-air-balloon_success.jpg"
          alt="hot air ballons success"
        />
        <div className="confirmationDetails">
          <h1>
            Success! <br />
            Your appointment has been scheduled,{" "}
            {props.confirmationInfo.patient_name}.
          </h1>
          <p>
            Please add your appointment with <br /> Dr.{" "}
            {props.doctor.attributes.last_name} on {aptTime} to your calendar.
          </p>
        </div>
      </div>
      <div className="suggestedContent">
        <div class="row">
          <div class="column">
            <div class="card">
              <img src="http://localhost:3000/calendar.jpg" alt="calendar" />
              <div class="confirmationContainer">
                <h4>
                  Need to make another <br />
                  appointment with a specialist?
                </h4>
                <button type="button" onClick={newAppointment}>
                  Schedule now!
                </button>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img
                src="http://localhost:3000/seeAll.jpg"
                alt="see appointments"
              />
              <div class="confirmationContainer">
                <h4>
                  Need to review all of <br />
                  the appointments you've made?
                </h4>
                <button type="button">Review appointments</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}; //end of functional component

export default withRouter(Confirmation);
