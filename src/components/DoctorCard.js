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
    zip,
    gender
  } = props.doctor.attributes;

  function randomImage() {
    if (gender === "male") {
      let number = Math.floor(Math.random() * Math.floor(13));
      return `http://localhost:3000/doctor_pictures/male/doctor${number}.jpg`;
    } else {
      let number = Math.floor(Math.random() * Math.floor(7));
      return `http://localhost:3000/doctor_pictures/female/doctor${number}.jpg`;
    }
  }

  let image = randomImage();

  function handleClick() {
    props.setImage(image, props.doctor.id);
  }

  return (
    <div className="doctorCard" onClick={handleClick}>
      <img className="docImage" src={image} alt="placehoder doctor" />
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
