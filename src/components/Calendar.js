import React, { Component, Fragment } from 'react';
import { DatePicker, TimePicker } from '@y0c/react-datepicker';
import '@y0c/react-datepicker/assets/styles/calendar.scss';
import 'moment/locale/en-ca';

const Panel = ({ header, children }) => (
  <div style ={{ height: "300px" }}>
    <h1>{header}</h1>
    <div>{children}</div>
  </div>
);
class Calendar extends Component {

state = {
	date: "",
	time: ""
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


render(){
console.log(this.state)
return(
	<Fragment>
	<Panel header="DatePicker">
	<DatePicker onChange={this.calendarOnChange}/>
	</Panel>
	<Panel header="Time Picker">
	<TimePicker onChange={this.timeOnChange("Time Picker")}/>
	</Panel>
	</Fragment>
	)

}




}

export default Calendar;
