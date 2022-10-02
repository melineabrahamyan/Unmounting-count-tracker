import { Component } from "react";
import Card from "./components/card";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [
        { title: 1, isVisible: true, unmountCount: 0 },
        { title: 2, isVisible: true, unmountCount: 0 },
        { title: 3, isVisible: true, unmountCount: 0 },
        { title: 4, isVisible: true, unmountCount: 0 },
        { title: 5, isVisible: true, unmountCount: 0 },
      ],
      showReport: false,
    };
  }

  handleIsVisible = (title) => {
    this.setState({
      card: this.state.cards.map((card) => {
        if (card.title === title) {
          card.isVisible = !card.isVisible;
        }
        return card;
      }),
    });
  };

  hanldeUnmountCount = (title) => {
    this.setState({
      card: this.state.cards.map((card) => {
        if (card.title === title) {
          card.unmountCount = card.unmountCount + 1;
        }
        return card;
      }),
    });
  };

  handleShowReport = () => {
    this.setState({ showReport: !this.state.showReport });
  };

  render() {
    const { showReport } = this.state;
    return (
      <>
        <div className="container">
          {this.state.cards.map((card) => {
            return card.isVisible ? (
              <div className="card-wrapper">
                <Card
                  key={card.title}
                  {...card}
                  hanldeUnmountCount={this.hanldeUnmountCount}
                />
                <button
                  className="close-button"
                  onClick={() => {
                    this.handleIsVisible(card.title);
                  }}
                >
                  Close
                </button>
              </div>
            ) : (
              <button
                className="show-button"
                onClick={() => {
                  this.handleIsVisible(card.title);
                }}
              >
                Show
              </button>
            );
          })}
        </div>
        <div className="report-section">
          <button className="report-button" onClick={this.handleShowReport}>
            {showReport ? "Hide Report" : "Show Report"}
          </button>
          {showReport && (
            <>
              <h2>Reports</h2>
              {this.state.cards.map((card) => (
                <div>
                  Card number {card.title} unmounted {card.unmountCount} times
                </div>
              ))}
            </>
          )}
        </div>
      </>
    );
  }
}

export default App;
