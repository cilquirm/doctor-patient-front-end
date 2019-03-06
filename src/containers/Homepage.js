import React from "react";
import NavBar from "../components/NavBar";
import "../styles/Home.css";

const Homepage = props => {
  return (
    <div className="home">
      <NavBar />
      <div className="container">
        <form
          className="filter"
          align="center"
          onChange={props.selectSpecialty}
        >
          <label>Search:</label>
          <select id="specialists" placehoder="search for specialists">
            <option value="">Specialties:</option>
            <option value="all">All</option>
            <option value="Dentist">Dentist</option>
            <option value="Emergency Medicine">Emergency Medicine</option>
            <option value="Family Medicine">Family Medicine</option>
            <option value="Internal Medicine">Internal Medicine</option>
            <option value="Obstetrics & Gynecology">
              Obstetrics & Gynecology
            </option>
            <option value="Ophthalmology">Ophthalmology</option>
            <option value="Pain Medicine">Pain Medicine</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Physical Therpay">Physical Therpay</option>
            <option value="Psychiatry">Psychiatry</option>
            <option value="Surgery">Surgery</option>
          </select>
        </form>
        <img
          className="mainImage"
          src="http://localhost:3000/city_background.jpg"
          alt="NYC Skyline"
        />
        <img
          className="df_icon bounce-3"
          src="http://localhost:3000/df_icon.png"
          alt="Docfinder Logo Icon"
        />
        <div className="centered">
          Find a trusted <br />
          specialist <br />
          near you.
        </div>
      </div>
    </div>
  );
};

export default Homepage;
