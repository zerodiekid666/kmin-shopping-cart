import React from "react";
import { connect } from "react-redux";
import { Grid, TextField, Button } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";

function Cart(props) {
  const { cartFromStore, removeFromStore, updateValue } = props;
  const handleUpdateCart = (e, id) => {
    console.log(e);

    if (Number(e.target.value) === 0) {
      return removeFromStore(id);
    } else {
      updateValue(id, e.target.value);
    }
  };
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
            <Grid
              key={Math.random()}
              style={{
                borderRadius: "10px",
                padding: "25px",
                boxShadow: "rgba(0, 0, 0, 0.4) 1px 1px 40px",
                marginBottom: "20px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center"
              }}
            >
              <Grid component="p" item>
                <img src={ele.src} alt={ele.name} height="70px" />
              </Grid>
              <Grid
                component="p"
                style={{
                  width: "200px",
                  textOverflow: "ellipsis",
                  height: "20px",
                  overflow: "hidden",
                  textAlign: "left"
                }}
              >
                {ele.name}
              </Grid>
              <Grid component="p">
                <TextField
                  defaultValue={ele.value}
                  type="number"
                  style={{ width: "80px" }}
                  inputProps={{ min: "0", max: "10" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    )
                  }}
                  onChange={e => handleUpdateCart(e, ele.id)}
                />
              </Grid>
              <Grid component="p">{ele.price}$</Grid>
              <Grid component="p">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => removeFromStore(ele.id)}
                >
                  Remove
                </Button>
              </Grid>
            </Grid>
          );
        })}

        <Grid xs={4}></Grid>
      </Grid>
      {/* <h2>{props.cartFromStore}</h2> */}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cartFromStore: state.myCart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromStore: id => dispatch({ type: "REMOVE_CART", payload: id }),

    updateValue: (id, value) =>
      dispatch({ type: "UPDATE_CART_VALUE", payload: { id, value } })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
