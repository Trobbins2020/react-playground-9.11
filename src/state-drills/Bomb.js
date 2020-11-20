import React from "react";

class Bomb extends React.Component {
  state = {
    count: 0,
    word: "",
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.count >= 8) {
        this.setState({
          word: "BOOM!!!!",
        });
        clearInterval(this.interval);
      } else if (this.state.count % 2 === 0) {
        this.setState({
          word: "tick",
        });
      } else {
        this.setState({
          word: "tock",
        });
      }
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        <p>{this.state.word}</p>
      </div>
    );
  }
}

export default Bomb;
