import React, { Component } from "react";

export default class Sum extends Component {
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null,
    };
  }

  updateNumber_1(val) {
    this.setState({ number1: parseInt(val, 10) });
  }

  updateNumber_2(val) {
    this.setState({ number2: parseInt(val, 10) });
  }

  add(num1, num2) {
    this.setState({ sum: num1 + num2 });
  }

  render() {
    return (
      <main className="sum_box box_sum">
        <h2> Sum </h2>
        <input
          className="input_1"
          type="number"
          onChange={(e) => this.updateNumber_1(e.target.value)}
        />
        <input
          className="input_1"
          type="number"
          onChange={(e) => this.updateNumber_1(e.target.value)}
        />
        <button
          className="add_button"
          onClick={() => this.add(this.state.number1, this.state.number2)}
        >
          Add
        </button>
        <span className="results"> Sum: {this.state.sum} </span>
      </main>
    );
  }
}
