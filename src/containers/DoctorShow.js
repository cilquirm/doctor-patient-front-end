import React, { Fragment } from "react";
import NavBar from "../components/NavBar";
//import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "../styles/SpecialistsShow.css";

const DoctorShow = props => {
  const {
    first_name,
    last_name,
    specialty,
    city,
    state,
    street,
    zip,
    bio
  } = props.doctor.attributes;

  return (
    <Fragment>
      <NavBar />

      <div className="specialistsShow">
        <div className="doctorImage">
          <img
            className="docImage"
            src="http://localhost:3000/vitruvian_man.jpg"
            alt="placehoder doctor"
          />
        </div>

        <div className="doctorDetails">
          <h4>{specialty}</h4>
          <h2>
            Dr. {first_name} {last_name}
          </h2>
          <p>About Dr. {last_name}:</p>
          <p>{bio}</p>
          <p>Address:</p>
          <p>
            {street}, <br />
            {city}, {state}
            <br />
            {zip}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default DoctorShow;

// function joinAddress() {
//   let formattedStreet = street.split(" ").join("%20");
//   let formattedCity = city.split(" ").join("%20");
//   let formattedState = state.split(" ").join("%20");
//
//   return (
//     formattedStreet +
//     "%20" +
//     formattedCity +
//     "%20" +
//     formattedState +
//     "%20" +
//     zip
//   );
// }

// <div className="iframe">
//   <div>
//     <iframe
//       width="425"
//       height="350"
//       frameborder="0"
//       scrolling="no"
//       marginheight="0"
//       marginwidth="0"
//       src="https://www.openstreetmap.org/history#map=19/40.76324/-73.97572"
//     />
//   </div>
//   <br />
// </div>

// <div>
// </div>
