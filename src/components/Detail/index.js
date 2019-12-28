import React, { Component } from "react";
import { Grid, CircularProgress, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

import Axios from "axios";

export default class Detail extends Component {
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
    console.log(detail);
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
              <h4>{this.state.products.price}$</h4>

              <Grid container spacing={3}>
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
                  type="number"
                  id="margin-none"
                  size="medium"
                  fullWidth={true}
                  inputProps={{ min: "0", max: "10" }}
                  onChange={this.handleValue}
                />
              </Grid>

              <Grid container item style={this.styles.pt20}>
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
        ) : (
          <CircularProgress m={40} />
        )}
      </>
    );
  }
}
