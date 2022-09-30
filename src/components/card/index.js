import { Component } from "react";
import ShowCard from "../showCard";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: true, unmountCount: 0 };
  }
  handleClick = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };
  handleUnmount = () => {
    this.setState({ unmountCount: this.state.unmountCount + 1 });
  };
  render() {
    const { title, showReport } = this.props;
    const { isVisible, unmountCount } = this.state;
    return (
      <>
        <div className="wrapper">
          <button className="button" onClick={this.handleClick}>
            {isVisible ? "Close" : "Show"}
          </button>
          {isVisible ? (
            <ShowCard title={title} handleUnmount={this.handleUnmount} />
          ) : (
            ""
          )}
          {showReport ? (
            <>
              <div className="unmount">
                Card number {title} unmounted {unmountCount} times
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
}
