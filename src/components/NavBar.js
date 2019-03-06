import React from "react";
import { withRouter } from "react-router-dom";

const NavBar = props => {
  function sendToHomepage() {
    props.history.push("/");
  }

  return (
    <div className="navbar">
      <img
        onClick={sendToHomepage}
        className="navImage"
        src="http://localhost:3000/docfinder.png"
        alt="DocFinder Logo"
      />
    </div>
  );
};

export default withRouter(NavBar);
