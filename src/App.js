import React, { Component, Fragment } from "react";
import Homepage from "./containers/Homepage";
import Specialists from "./containers/Specialists";
import { Route } from "react-router-dom";

const DOCTORS_API = "http://localhost:8000/api/v1/doctors";

class App extends Component {
  state = {
    doctors: [],
    specialty: "all"
  };

  componentDidMount() {
    fetch(DOCTORS_API)
      .then(resp => resp.json())
      .then(doctorsdata => {
        this.setState({ doctors: doctorsdata["data"] });
      });
  }

  selectSpecialty = event => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ specialty: event.target.value });

    //NEED TO REDIRECT HERE WITH STATE INTACT!
  };

  render() {
    return (
      <Fragment>
        <Route
          exact
          path="/"
          render={() => <Homepage selectSpecialty={this.selectSpecialty} />}
        />
        <Route
          exact
          path="/specialists"
          render={() => (
            <Specialists
              doctors={this.state.doctors}
              specialty={this.state.specialty}
            />
          )}
        />
      </Fragment>
    );
  }
}

export default App;
