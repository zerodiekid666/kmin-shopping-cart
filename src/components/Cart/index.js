import React from "react";
import { connect } from "react-redux";
import { Grid, TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";

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
            <Grid
              key={Math.random()}
              style={{
                borderRadius: "10px",
                padding: "25px",
                width: "70%",
                boxShadow: "rgba(0, 0, 0, 0.4) 1px 1px 40px",
                marginBottom: "20px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center"
              }}
            >
              <Grid component="p" item>
                <img src={ele.src} alt={ele.name} height="100px" />
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
                  // onChange={this.handleValue}
                />
              </Grid>
              <Grid component="p">{ele.price}$</Grid>
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
