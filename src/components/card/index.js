import { Component } from "react";

export default class Card extends Component {
  constructor(props) {
    super(props);
  }
  componentWillUnmount() {
    this.props.hanldeUnmountCount(this.props.title);
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
