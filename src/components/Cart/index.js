import React from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";

const mapStateToProps = state => {
  return {
    cartFromStore: state.myCart
  };
};
function Cart(props) {
  const { cartFromStore } = props;
  return (
    <div>
      <h1>Cart Page</h1>
      {/* {console.log(cartFromStore)} */}
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        {cartFromStore.map((ele, i) => {
          return (
            <Grid key={i} item>
              <Grid component="span">{ele.name}</Grid>
              <Grid component="span">{ele.price}$</Grid>
            </Grid>
          );
        })}
      </Grid>
      {/* <h2>{props.cartFromStore}</h2> */}
    </div>
  );
}

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
