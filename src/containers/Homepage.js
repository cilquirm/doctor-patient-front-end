import React from "react";
import NavBar from "../components/NavBar";

const Homepage = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="container">
        <form className="filter" align="center">
          <label>Search:</label>
          <input list="specialists" name="specialists" />
          <datalist id="specialists" placehoder="search for specialists">
            <option value="Dentist" />
            <option value="Emergency Medicine" />
            <option value="Family Practice" />
            <option value="Internal Medicine" />
            <option value="Obstetrics & Gynecology" />
            <option value="Ophthalmology" />
            <option value="Pain Medicine" />
            <option value="Pediatrics" />
            <option value="Physical Therpay" />
            <option value="psychiatrist" />
            <option value="Surgery" />
          </datalist>
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
