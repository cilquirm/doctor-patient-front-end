import React, { Component, Fragment } from "react";
import { DatePicker, TimePicker } from "@y0c/react-datepicker";
import "@y0c/react-datepicker/assets/styles/calendar.scss";
import "moment/locale/en-ca";

const Panel = ({ header, children }) => (
  <div style={{ height: "300px" }}>
    <h1>{header}</h1>
    <div>{children}</div>
  </div>
);
class Calendar extends Component {
  render() {
    // console.log(this.state)
    return (
      <Fragment>
        <Panel header="DatePicker">
          <DatePicker onChange={this.props.calendarOnChange} />
        </Panel>
        <Panel header="Time Picker">
          <TimePicker onChange={this.props.timeOnChange("Time Picker")} />
        </Panel>
      </Fragment>
    );
  }
}

export default Calendar;
