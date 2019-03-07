import React, { Component } from "react";

class EditConfirmation extends Component {

state = {
appointment: "",
time: "",
date: "",
email: "",
phone: ""
}


componentDidMount(){
	fetch('http://localhost:8000/api/v1/appointments/1').then(res=>res.json()).then(res=>{this.setState({
		appointment: res.data.attributes.appointment,
		email: res.data.attributes.patient.email,
		phone: res.data.attributes.patient.phone
	})})
}

handleOnChange(e){
	if (e.target.name === "time") {
	this.setState({
		time: e.target.value
	})
	}
	if (e.target.name === "date") {
			this.setState({
		date: e.target.value
	})}
	if (e.target.name === "email") {
			this.setState({
		email: e.target.value
	})}
	if (e.target.name === "phone") {
			this.setState({
		phone: e.target.value
	})}
}

onSubmit = (e) =>{


console.log('submit')

fetch(`http://localhost:8000/api/v1/appointments/1`,
      {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
        "appointmentProps": {	
          "appointment": "2019-03-16T07:00:00.000Z",
          "patient_id": 1,
          "doctor_id": 427, 
          "phone": "123",
          "email": "haha@yahoo.com"
      			}
      		}
        })
      }
    ).then(res=>console.log(res));

}

render(){
	// console.log(this.props)
return(

	<div>
<h1>Request to Change Appointment</h1>


  <label>
    Time:
    <input type="time" name="time" value={this.state.appointment} onChange={(e)=>this.handleOnChange(e)}/>
  </label><br/>
 <label>
    Date:
    <input type="date" name="date" value={this.state.appointment}onChange={(e)=>this.handleOnChange(e)}/>
  </label><br/>
   <label>
    Email:
    <input type="text" name="email" value={this.state.email}onChange={(e)=>this.handleOnChange(e)}/>
  </label><br/>
 <label>
    Phone:
    <input type="text" name="phone" value={this.state.phone}onChange={(e)=>this.handleOnChange(e)}/>
  </label><br/>

   
  <button  onClick={e=>this.onSubmit(e)}>Submit </button>




	</div>

	)
	}
}

export default EditConfirmation