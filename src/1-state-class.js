import React from "react";

class Counter extends React.Component {
  state = { count: 0 };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    const { color } = this.props;
    return (
      <div>
        <h1 style={{ color }}>{this.state.count}</h1>
        <button onClick={this.handleDecrement}>{" - "}</button>
        <button onClick={this.handleIncrement}>{" + "}</button>
      </div>
    );
  }
}

export default Counter;
