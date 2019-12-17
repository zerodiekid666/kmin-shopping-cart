import React, { Component } from "react";
import { Button } from "@material-ui/core";

export default class Pager extends Component {
  render() {
    const { num } = this.props;
    return <Button variant="contained" >{num}</Button>;
  }
}
