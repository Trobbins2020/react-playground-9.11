import React from "react";

class RouletteGun extends React.Component {
  state = {
    chamber: null,
    spinningTheChamber: false,
    message: "",
  };
  handleClicked = () => {
    console.log("Button clicked");
    this.setState({
      spinningTheChamber: true,
      message: "spinning the chamber and pulling the trigger! ....",
    });

    this.interval = setTimeout(() => {
      this.setState({
        chamber: Math.floor(Math.random() * 8) + 1,
        spinningTheChamber: false,
      });

      if (this.state.chamber === this.props.bulletInChamber) {
        this.setState({
          message: "BANG!!!",
        });
      } else {
        this.setState({
          message: "you're safe!!",
        });
      }
    }, 2000);
  };
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClicked}>Pull the Trigger</button>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default RouletteGun;
