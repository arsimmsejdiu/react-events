import React, { Component } from "react";
import NumberItem from "./NumberItem";

class NumberList extends Component {
  state = {
    nums: [1, 2, 3, 4, 5],
  };

  remove = (num) => {
    this.setState((st) => ({
      nums: st.nums.filter((n) => n !== num),
    }));
  };

  render() {
    const { nums } = this.state;
    let num = nums.map((number , index) => (
      <NumberItem key={index} value={number} remove={() => this.remove(number)} />
    ));
    return (
      <div>
        <h1>First Number List</h1>
        <ul>{num}</ul>
      </div>
    );
  }
}

export default NumberList;
