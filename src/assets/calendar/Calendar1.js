import React, { Component } from "react";
import Calendar from "react-calendar";
import GridPage2 from "../../assets/grids/GridPage2";

class Calendar1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  onChange = (date) => {
    this.state.date = date;
    this.setState({ date });
    this.envoieDate();
  };

  envoieDate = () => {
    //console.log(this.state.date);
    return;
  };
  render() {
    return (
      <div>
        <Calendar onChange={this.onChange} value={this.state.date} />
      </div>
    );
  }
}

export default Calendar1;
