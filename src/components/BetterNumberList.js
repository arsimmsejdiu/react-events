import React, { Component } from "react";

import BetterNumberItem from "./BetterNumberItem";

class BetterNumberList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nums: [1, 2, 3, 4, 5],
    };
    this.remove = this.remove.bind(this);
  }

  remove(num) {
    console.log("REMOVING!!");
    console.log(num);
    this.setState((st) => ({
      nums: st.nums.filter((n) => n !== num),
    }));
  }

  render() {
    const { nums } = this.state;
    let num = nums.map((number, index) => (
      <BetterNumberItem key={index} value={number} remove={this.remove} />
    ));
    return (
      <div>
        <h1>Better First Number List</h1>
        <ul>{num}</ul>
      </div>
    );
  }
}

export default BetterNumberList;
