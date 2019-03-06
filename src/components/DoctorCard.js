import React from "react";
import { withRouter } from "react-router-dom";

const DoctorCard = props => {
  const {
    first_name,
    last_name,
    specialty,
    city,
    state,
    street,
    zip
  } = props.doctor.attributes;


  function handleClick() {
    props.history.push(`/specialists/${props.doctor.id}`);
  }

  return (
    <div className="doctorCard" onClick={handleClick}>
      <img
        className="docImage"
        src="http://localhost:3000/vitruvian_man.jpg"
        alt="placehoder doctor"
      />
      <div className="details">
        <h4>{specialty}</h4>
        <h2>
          Dr. {first_name} {last_name}
        </h2>
        <p>
          Address: <br />
          {street}, <br />
          {city}, {state} {zip}
        </p>
      </div>
    </div>
  );
};

export default withRouter(DoctorCard);
