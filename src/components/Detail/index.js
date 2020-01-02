import React, { Component } from "react";
import { Grid, CircularProgress, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import Axios from "axios";
import { connect } from "react-redux";

class Detail extends Component {
  state = {
    products: null,
    value: "",
    size: ""
  };

  // detail = {
  //   name: this.state.products.name,
  //   price: this.state.products.price,
  //   size: this.state.products.size,
  //   value: this.state.products.value
  // };

  handleValue = event => {
    this.setState({ value: event.target.value });
  };
  handleSize = event => {
    this.setState({ size: event.target.value });
  };

  handleAddToCart = () => {
    console.log("add to cart");
    const detail = {
      name: this.state.products.name,
      price: this.state.products.price,
      size: this.state.size,
      value: this.state.value
    };
    if (detail.value <= 0) {
      alert("Chon so luong sp");
    } else {
      this.props.addToCart(detail);
    }
  };

  styles = {
    gridContainer: {
      paddingTop: "70px"
    },
    pt20: {
      paddingTop: "20px"
    },
    imgTag: {
      height: "250px",
      display: "inline-block"
    },
    gridRight: {
      textAlign: "left"
    },
    mr30: {
      marginRight: "30px"
    },
    width300: {
      width: "250px"
    },
    inputSize: {
      marginBottom: "20px"
    }
  };

  componentDidMount() {
    Axios.get(
      `https://kmin-academy-shopping-cart-api.herokuapp.com/products/${this.props.match.params.id}`
    )
      .then(res => {
        this.setState({ products: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        {this.state.products !== null ? (
          <Grid container style={this.styles.gridContainer}>
            <Grid style={this.styles.gridLeft} item md={4}>
              <p>
                <img
                  style={this.styles.imgTag}
                  src={`${this.state.products.src}`}
                  alt={this.state.name}
                />
              </p>
            </Grid>

            <Grid item md={4} style={this.styles.gridRight}>
              <h2>{this.state.products.name}</h2>

              <Grid container spacing={3} style={{ marginBottom: "15px" }}>
                {this.state.products.size.map(size => {
                  return (
                    <Grid item key={size}>
                      <label>
                        {size}
                        <input
                          type="radio"
                          name="size"
                          value={size}
                          onChange={this.handleSize}
                        />
                      </label>
                    </Grid>
                  );
                })}
              </Grid>
              <Grid item lg={4}>
                <TextField
                  label="With amount"
                  type="number"
                  size="medium"
                  style={{ width: "200px" }}
                  inputProps={{ min: "0", max: "10" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    )
                  }}
                  onChange={this.handleValue}
                />
              </Grid>

              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                style={{ width: "300px" }}
              >
                <Grid spacing={2} item>
                  <h4 style={{ fontSize: "30px" }}>
                    {this.state.products.price}
                    <span style={{ fontSize: "24px", paddingLeft: "3px" }}>
                      $
                    </span>
                  </h4>
                </Grid>
                <Grid item className={this.styles.mr30}>
                  <Button
                    size="large"
                    variant="contained"
                    color="primary"
                    onClick={this.handleAddToCart}
                  >
                    Add to cart
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <CircularProgress m={40} />
        )}
      </>
    );
  }
}

const mapStateToProps = () => {};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: product => dispatch({ type: "ADD_TO_CART", payload: product })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
