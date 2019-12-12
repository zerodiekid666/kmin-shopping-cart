import React from "react";
import Product from "../Product";
import { Grid, Box, CircularProgress } from "@material-ui/core";
import axios from "axios";
export default class Products extends React.Component {
  state = {
    products: []
  };

  componentDidMount() {
    axios
      .get("https://kmin-academy-shopping-cart-api.herokuapp.com/products")
      .then(res => {
        console.log(res);
        this.setState({ products: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <h1>Products Page</h1>
        {/* class=row Bootstrap */}
        <Grid container>
          <Grid item md={3}>
            Filter
          </Grid>
          <Grid item md={9}>
            <Box display="flex" flexWrap="wrap">
              {this.state.products.length > 0 ? (
                this.state.products.map(ele => {
                  return (
                    <Product
                      id={ele.id}
                      name={ele.name}
                      src={
                        "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/hguw6u4kljhfqursqjd9/joyride-flyknit-aw-running-shoe-zBGLbd.jpg"
                      }
                      price={ele.price}
                    />
                  );
                })
              ) : (
                <CircularProgress size={40} />
              )}
            </Box>
          </Grid>
        </Grid>
      </div>
    );
  }
}
