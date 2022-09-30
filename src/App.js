import { Component } from "react";
import Card from "./components/card";

class App extends Component {
  constructor() {
    super();
    this.state = { showReport: false };
  }
  cards = [
    { title: "1" },
    { title: "2" },
    { title: "3" },
    { title: "4" },
    { title: "5" },
  ];

  handleReport = () => {
    this.setState({ showReport: !this.state.showReport });
  };

  render() {
    const { showReport } = this.state;
    return (
      <div>
        <div className="container">
          {this.cards.map((card) => (
            <Card key={card.title} title={card.title} showReport={showReport} />
          ))}
        </div>
        <button className="report-button" onClick={this.handleReport}>
          {showReport ? "Close Report" : "Show Report"}
        </button>
      </div>
    );
  }
}

export default App;
