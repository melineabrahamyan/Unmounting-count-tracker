import { Component } from "react";

export default class ShowCard extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.handleUnmount();
  }
  render() {
    const { title } = this.props;
    return (
      <>
        <div className="card">{title}</div>
      </>
    );
  }
}
