import React from "react";

class HelloWorld extends React.Component {
  state = {
    who: "world",
  };
  handleButtonClick = (word) => {
    this.setState({ who: word });
  };
  render() {
    return (
      <div>
        <p>Hello, {this.state.who}!</p>
        <button onClick={() => this.handleButtonClick("friend")}>Friend</button>
        <button onClick={() => this.handleButtonClick("React")}>React</button>
        <button onClick={() => this.handleButtonClick("world")}>World</button>
      </div>
    );
  }
}

export default HelloWorld;
