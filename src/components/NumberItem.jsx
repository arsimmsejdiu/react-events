import React, { Component } from "react";

class NumberItem extends Component {
  render() {
    const { value, remove } = this.props;
    return (
      <li>
        {value}
        <button onClick={remove}>X</button>
      </li>
    );
  }
}

export default NumberItem;
