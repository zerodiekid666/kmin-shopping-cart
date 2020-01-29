import React from "react";
import Product from "../Product";
import { Grid, Box, CircularProgress, Button } from "@material-ui/core";
import { connect } from "react-redux";
import axios from "axios";

class Products extends React.Component {
  state = {
    products: [],
    page: 1,
    page_size: 20,
    desc: 0
  };

  style = {
    circleWait: {
      position: "fixed",
      top: "45%",
      left: "50%",
      transform: "translate(-50%,-50%)"
    }
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
        <Grid>
          {/* <Grid item md={3}>
            <Button variant="contained" onClick={() => this.handleDesc(1)}>
              Up to
            </Button>
            <Button variant="contained" onClick={() => this.handleDesc(-1)}>
              Down to
            </Button>
          </Grid> */}

          <Grid container>
            {this.state.products.length > 0 ? (
              [...this.state.products]
                .sort((a, b) => {
                  return this.state.desc * (a.price - b.price);
                })
                .splice(
                  (this.state.page - 1) * this.state.page_size,
                  this.state.page_size
                )
                .map((ele, i) => {
                  return (
                    <Grid item key={i} md={3}>
                      <Product
                        key={this.i}
                        id={ele.id}
                        name={ele.name}
                        src={ele.src}
                        price={ele.price}
                        addToCart={this.props.addToCart}
                      />
                    </Grid>
                  );
                })
            ) : (
              <CircularProgress style={this.style.circleWait} size={40} />
            )}
          </Grid>
        </Grid>
        {/* <Box>{pagination}</Box> */}
      </div>
    );
  }
}

const mapStateToProps = null;
const mapDispatchToProps = dispatch => {
  return {
    addToCart: product => dispatch({ type: "ADD_TO_CART", payload: product })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
