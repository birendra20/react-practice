import React, { Component } from "react";

class ClassCounterTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  };

  render() {
    return (
      <div>
        <p>..............class counter two......................</p>
        <button onClick={this.incrementCount}>Count {this.state.count}</button>
      </div>
    );
  }
}

export default ClassCounterTwo;
