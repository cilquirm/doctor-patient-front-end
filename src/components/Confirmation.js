import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Confirmation extends Component {


 formatDate = date => {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
}

render(){

let d = new Date();
let e = this.formatDate(d);


console.log('my confirmation info: ', this.props.confirmationInfo,'my doctor prop: ', this.props.doctor)

return(

	<div>
	<h1>CONFIRMATION PAGE </h1>

	<p>Hello "USERNAME", your appointment with Dr. {this.props.doctor.attributes.last_name} at {e} has been confirmed; </p>


	</div>
	)

  }
}//end of functional component 


export default Confirmation