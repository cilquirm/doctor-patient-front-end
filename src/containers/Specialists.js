import React from "react";
import NavBar from "../components/NavBar";
import DoctorCard from "../components/DoctorCard";
import "../styles/Home.css";
import "../styles/Specialists.css";

const Specialists = props => {
  function filterBySpecialty() {
    // debugger;
    if (props.specialty === "all") {
      return props.doctors;
    } else {
      return props.doctors.filter(doctor => {
        return props.specialty === doctor.attributes.specialty;
      });
    }
  }

  function mapDoctors() {
    return filterBySpecialty().map(doctor => {
      return <DoctorCard key={doctor.id} doctor={doctor} />;
    });
  }

  return (
    <div className="specialists">
      <NavBar />
      {mapDoctors()}
    </div>
  );
};

export default Specialists;
