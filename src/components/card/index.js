import { Component } from "react";

export default class Card extends Component {
  constructor(props) {
    super(props);
  }
  componentWillUnmount() {
    this.props.hanldeUnmountCount(this.props.title);
  }
  render() {
    const { title, unmountCount } = this.props;
    return (
      <>
        <div>{title}</div>
        <div>{unmountCount}</div>
      </>
    );
  }
}
