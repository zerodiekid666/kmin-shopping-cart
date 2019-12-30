import React from "react";
import Product from "../Product";
import { Grid, Box, CircularProgress, Button } from "@material-ui/core";
import axios from "axios";
export default class Products extends React.Component {
  state = {
    products: [],
    page: 1,
    page_size: 20,
    desc: 0
  };

  handlePager = value => {
    this.setState({ page: value });
  };

  handleDesc = value => {
    this.setState({ desc: value });
  };

  componentDidMount() {
    axios
      .get("https://kmin-academy-shopping-cart-api.herokuapp.com/products")
      .then(res => {
        this.setState({ products: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    let pager = Math.ceil(this.state.products.length / this.state.page_size);
    const pagination = [];
    for (let i = 0; i < pager; i++) {
      pagination.push(
        <Button
          p={5}
          variant={this.state.page === i + 1 ? "contained" : "outlined"}
          onClick={() => this.handlePager(i + 1)}
        >
          {i + 1}
        </Button>
      );
    }
    return (
      <div>
        <h1>Products Page</h1>
        {/* class=row Bootstrap */}
        <Grid container>
          <Grid item md={3}>
            <Button variant="contained" onClick={() => this.handleDesc(1)}>
              Up to
            </Button>
            <Button variant="contained" onClick={() => this.handleDesc(-1)}>
              Down to
            </Button>
          </Grid>
          <Grid item md={9}>
            <Box display="flex" flexWrap="wrap">
              {this.state.products.length > 0 ? (
                [...this.state.products]
                  .sort((a, b) => {
                    return this.state.desc * (a.price - b.price);
                  })
                  .splice(
                    (this.state.page - 1) * this.state.page_size,
                    this.state.page_size
                  )
                  .map(ele => {
                    return (
                      <Product
                        key={ele.id}
                        id={ele.id}
                        name={ele.name}
                        src={ele.src}
                        price={ele.price}
                      />
                    );
                  })
              ) : (
                <CircularProgress size={40} />
              )}
            </Box>
          </Grid>

          <Box>{pagination}</Box>
        </Grid>
      </div>
    );
  }
}
