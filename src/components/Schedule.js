import React, { Component } from "react";
import Modal from "react-modal";
import Calendar from "./Calendar";
import { withRouter } from "react-router-dom";

const customStyles = {
  content: {
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

Modal.setAppElement("#root");

class ExampleModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      first_name: "",
      last_name: "",
      number: "",
      email: "",
      date: "",
      time: ""
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#8A2BE2";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ modalIsOpen: false });

    fetch(`http://localhost:8000/api/v1/appointments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        appointmentProps: {
          doctor_id: this.props.doctorId,
          patient_id: null,
          appointment: `${this.state.date}, ${this.state.time} GMT-4`
        },
        patient_info: {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          phone: this.state.number,
          email: this.state.email
        }
      })
    })
      .then(res => res.json())
      .then(data => {
        this.props.setConfirmation(data);
      });
  }

  handleOnChange(e) {
    if (e.target.id === "first_name") {
      this.setState({
        first_name: e.target.value
      });
    }
    if (e.target.id === "last_name") {
      this.setState({
        last_name: e.target.value
      });
    }
    if (e.target.id === "number") {
      this.setState({
        number: e.target.value
      });
    }
    if (e.target.id === "email") {
      this.setState({
        email: e.target.value
      });
    }
  }

  calendarOnChange = date => {
    // console.log(date);
    this.setState({
      date: date
    });
  };

  timeOnChange = title => (...args) => {
    // console.log(title, args);

    // console.log(args.join().replace(/,/gi, ":"))
    let minute = args[1];
    let stringMin = minute.toString();
    // console.log(stringMin.length)

    if (stringMin.length < 2) {
      stringMin = "0" + stringMin;
    }
    // console.log(stringMin)

    let hour = args[0] + ":";
    let pmam = args[2];
    let fullTime = hour + stringMin + pmam;

    // console.log(fullTime)

    this.setState({
      time: fullTime
    });
  };

  render() {
    // console.log('my state: ', this.state, 'my props: ', this.props);
    return (
      <div>
        <button className="scheduleBtn" onClick={this.openModal}>
          Schedule an Appointment
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>
            Please fill out the below:
          </h2>
          <button onClick={this.closeModal}>close</button>
          <button onClick={e => this.handleSubmit(e)}>Submit</button>
          <br />
          <br />
          <div>Your information: </div>
          <br />
          First name:{" "}
          <input
            id="first_name"
            value={this.state.fist_name}
            onChange={e => this.handleOnChange(e)}
          />
          <br />
          Last name:{" "}
          <input
            id="last_name"
            value={this.state.last_name}
            onChange={e => this.handleOnChange(e)}
          />
          <br />
          Phone:{" "}
          <input
            id="number"
            value={this.state.number}
            onChange={e => this.handleOnChange(e)}
          />
          <br />
          Email:{" "}
          <input
            id="email"
            value={this.state.email}
            onChange={e => this.handleOnChange(e)}
          />
          <br />
          <Calendar
            calendarOnChange={this.calendarOnChange}
            timeOnChange={this.timeOnChange}
          />
        </Modal>
      </div>
    );
  }
}

export default withRouter(ExampleModal);
