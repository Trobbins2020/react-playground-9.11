import React from "react";
import "./Accordion.css";
class Accordion extends React.Component {
  static defaultProps = { sections: [] };
  state = {
    currentSectionIndex: 0,
  };
  handleButtonClick(index) {
    this.setState({ currentSectionIndex: index });
  }
  renderButtons() {
    return this.props.sections.map((section, index) => (
      <li key={index + 1}>
        <button onClick={() => this.handleButtonClick(index + 1)}>
          {section.title}
        </button>
      </li>
    ));
  }
  renderContent() {
    if (this.state.currentSectionIndex !== 0) {
      const currentTab = this.props.sections[
        this.state.currentSectionIndex - 1
      ];
      return <div className="content">{currentTab.content}</div>;
    }
  }
  render() {
    if (this.props.sections.length === 0) {
      return (
        <div>
          <ul>
            <li></li>
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <ul>{this.renderButtons()} </ul>
          <p>{!!this.props.sections.length && this.renderContent()}</p>
        </div>
      );
    }
  }
}

export default Accordion;
