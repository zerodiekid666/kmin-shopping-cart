import React, { Component } from "react";

export default class Detail extends Component {
  componentDidMount() {}

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Detail Page</h1>
        <p>{this.props.match.params.id}</p>
      </div>
    );
  }
}
