import React, { Component, Fragment } from "react";
import Homepage from "./containers/Homepage";
import Specialists from "./containers/Specialists";
import DoctorShow from "./containers/DoctorShow";
import { Route, withRouter } from "react-router-dom";
import Confirmation from "./components/Confirmation";

const DOCTORS_API = "http://localhost:8000/api/v1/doctors";

class App extends Component {
  state = {
    doctors: [],
    specialty: "all",
    confirmation: {}
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
    this.setState({ specialty: event.target.value });
    this.props.history.push("/specialists");
  };

  findDoctor = id => {
    return this.state.doctors.find(doctor => {
      return doctor.id === id;
    });
  };

  setConfirmation = obj => {
    this.setState(
      {
        confirmation: obj
      },
      () => {
        this.props.history.push("/confirmation");
      }
    );
  };

  render() {
    console.log(this.state.confirmation);
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
        <Route
          exact
          path="/specialists/:id"
          render={routerProps => {
            let doctor = this.findDoctor(routerProps.match.params.id);
            return doctor ? (
              <DoctorShow
                doctor={doctor}
                setConfirmation={this.setConfirmation}
              />
            ) : (
              <h1>LOADING</h1>
            );
          }}
        />
        <Route
          exact
          path="/confirmation"
          render={() => {
            // console.log(this.state.confirmation.doctor_id);
            let idToString = this.state.confirmation.confirmed.doctor_id + "";
            let doctor = this.findDoctor(idToString);
            return doctor ? (
              <Confirmation
                doctor={doctor}
                confirmationInfo={this.state.confirmation}
              />
            ) : (
              <h1>LOADING</h1>
            );
          }}
        />
      </Fragment>
    );
  }
}

export default withRouter(App);
