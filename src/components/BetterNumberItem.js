import React, { Component } from "react";

class BetterNumberItem extends Component {
  handleRemove = (event) => {
    console.log("INSIDE HANDLE REMOVE!!!");
    const { value, remove } = this.props;
    remove(value);
  };
  render() {
    const { value } = this.props;
    return (
      <div>
        <li>
          {value}
          <button onClick={this.handleRemove}>X</button>
        </li>
      </div>
    );
  }
}

export default BetterNumberItem;
