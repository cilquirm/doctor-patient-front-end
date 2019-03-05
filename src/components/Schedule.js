import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Calendar from './Calendar'

const customStyles = {
  content : {
    top                   : '55%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

class ExampleModal extends Component {
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false,
      name: "",
      number: "",
      address: "",
      date: "",
      time: ""

    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleOnChange=this.handleOnChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this)
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#8A2BE2';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleSubmit(e){
  	e.preventDefault()
  	this.setState({modalIsOpen: false})

  	fetch(`http://localhost:8000/api/v1/appointments`,
      {
        method: 'POST',
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            'Accept': 'application/json'
        },
        body: JSON.stringify({
         
          "doctor_id": 1,
          "patient_id": 1,
          "appointment": `${this.state.date}, ${this.state.time}`
        })
      }
    ).then(res=>console.log(res))
  }

  handleOnChange(e){
  	if(e.target.id == 'name')
    {this.setState({
      name: e.target.value
    })}
  if(e.target.id == 'number'){this.setState({
    number: e.target.value
  })}
  if(e.target.id == 'address'){this.setState({
    address: e.target.value
  })}
  }

  calendarOnChange = (date) => {
    console.log(date);
    this.setState({
    	date: date
    })
  }

  timeOnChange = title => (...args) => {console.log(title, args)

// console.log(args.join().replace(/,/gi, ":"))
let minute = args[1]
let stringMin = minute.toString()
// console.log(stringMin.length)

if (stringMin.length < 2){stringMin = "0" + stringMin}
// console.log(stringMin)

let hour = args[0]+":"
let pmam = args[2]
let fullTime = hour + stringMin + pmam

// console.log(fullTime)

this.setState({
	time: fullTime
})
}
 
  render() {
  	console.log(this.state)
    return (
      <div>
        <button onClick={this.openModal}>Schedule an Appointment</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={subtitle => this.subtitle = subtitle}>Please fill out the below:</h2>
          <button onClick={this.closeModal}>close</button>
        
            <button onClick={e=>this.handleSubmit(e)}>Submit</button>
          <br />
          <br />
          <div>Your information: </div>
          <br />
            Name: <input id="name" value={this.state.name} onChange={e=>this.handleOnChange(e)}/><br />
             Number: <input id="number" value={this.state.number}onChange={e=>this.handleOnChange(e)}/><br />
             Email: <input id="address" value={this.state.address}onChange={e=>this.handleOnChange(e)}/><br />
            
            <Calendar calendarOnChange={this.calendarOnChange} timeOnChange={this.timeOnChange}/>
         
        </Modal>
      </div>
    );
  }
}

export default ExampleModal