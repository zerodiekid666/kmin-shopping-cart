import React from "react";
import { connect } from "react-redux";
import { Grid, Typography, Box, Button } from "@material-ui/core";

import TextField from "@material-ui/core/TextField";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  product: {
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 20px",
    position: "relative",
    transition: "0.4s box-shadow ease",
    padding: "25px 10px",
    "& img": {
      maxWidth: "100%"
    },
    "&:hover": {
      boxShadow: "none"
    },
    "& a": {
      textDecoration: "none"
    }
  },
  forImg: {
    "& img": {
      backgroundColor: "black",
      maxHeight: "350px"
    }
  },
  boxBtn: {
    width: "100%"
  },
  media: {
    height: 0,
    backgroundSize: "auto 100%",
    paddingTop: "300px" // 16:9
  },
  inputCart: {
    width: "50px",
    margin: "0 20px",
    "& input": {
      textAlign: "center"
    }
  },
  title: {
    width: "240px",
    height: "50px",
    overflow: "hidden",
    // whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  },
  price: {
    marginBottom: "10px"
  },
  deleteBtn: {
    marginLeft: "195px",
    padding: 0,
    minWidth: "30px",
    marginTop: "-15px"
  },
  btn: {
    // fontSize: "23px",
    // padding: "0",
    // minWidth: "55px"
  },

  cartInfo: {
    position: "fixed",
    right: "2.4%",
    padding: "0 24px 10px",
    borderRadius: "5px",
    boxShadow: "1px 1px 25px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
    "& h3": {
      textTransform: "uppercase",
      marginBottom: 0
    },
    "& h4": {
      fontStyle: "italic",
      fontWeight: "lighter",
      color: "#cbc9c9",
      margin: "0 0 20px"
    },
    "& ul": {
      listStyle: "none"
    },
    "& li": {},
    "& span": {
      fontSize: "14px"
    },
    "& p": {
      display: "inline-block",
      fontWeight: "bold"
    }
  },
  cartGroup: {
    margin: "15px 0",
    padding: "0 15px",
    maxHeight: "260px",
    overflowY: "scroll"
  },
  cartList: {
    "& dl": {
      display: "flex",
      justifyContent: "space-between",
      alignContent: "flex-start"
    },
    "& dt": {
      "& p": {
        margin: 0
      }
    },
    "& dd": {
      width: "54px",
      textAlign: "right",
      fontSize: "14px"
    }
  },
  cartTotal: {
    marginTop: "24px",
    "& dt": {
      fontWeight: "bold",
      borderBottom: "1px solid #eee",
      margin: "0 0 10px",
      padding: "0 0 10px"
    },
    "& dd": {
      fontSize: "25px",
      fontWeight: "bold",
      textAlign: "right",
      marginRight: "0"
    }
  }
});

function Cart(props) {
  const carts = [
    {
      id: 2,
      name: "Circuit Board T-Shirt With Reflective In Black",
      src:
        "https://product.hstatic.net/1000042622/product/1__1__e5621b37aa5a40999cd40239f5508aab_master.jpg",
      price: 12,
      size: ["M", "L"]
    },
    {
      id: 3,
      src:
        "https://product.hstatic.net/1000042622/product/10_1_cc1bf7ac947d427b93ed0a39182c9ecd_master.jpg",
      name: "Fire It Up T-Shirt In Black",
      price: 22,
      size: ["S", "M"]
    },
    {
      id: 4,
      src:
        "https://product.hstatic.net/1000042622/product/6_f779ef8ecad24bc083b54d3598006709_master.jpg",
      name: "F-22 Raptor T-Shirt In White",
      price: 20,
      size: ["L"]
    }
  ];

  const { cartFromStore, removeFromStore, updateValue } = props;
  const cssClass = useStyle();

  const handleUpdateCart = (id, value, ele) => {
    updateValue(id, value, ele);
    if (ele.value < 1) {
      handleRemoveFromStore(id);
    }
  };
  const handleRemoveFromStore = id => {
    removeFromStore(id);
  };
  return (
    <div>
      <h1>Cart Page</h1>
      {/* {console.log(cartFromStore)} */}
      {cartFromStore.length > 0 ? (
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid
            item
            spacing={2}
            md={7}
            sm={5}
            xs={4}
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            {cartFromStore.map((ele, i) => {
              // console.log(ele);
              return (
                <Grid item key={i}>
                  <Box className={cssClass.product} id={ele.id}>
                    <Button
                      onClick={() => handleRemoveFromStore(ele.id)}
                      variant="contained"
                      color="primary"
                      className={cssClass.deleteBtn}
                    >
                      X
                    </Button>
                    <CardMedia
                      title={ele.name}
                      className={cssClass.media}
                      image={ele.src}
                    />
                    <Typography className={cssClass.title}>
                      {ele.name}
                    </Typography>
                    <Typography variant="h6" className={cssClass.price}>
                      {ele.price}$
                    </Typography>

                    <Box>
                      <Button
                        variant="contained"
                        color="primary"
                        className={cssClass.btn}
                        onClick={() => handleUpdateCart(ele.id, -1, ele)}
                      >
                        -
                      </Button>
                      <TextField
                        value={ele.value}
                        className={cssClass.inputCart}
                        id="standard-number"
                        margin="dense"
                        InputProps={{
                          readOnly: true
                        }}
                      />
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleUpdateCart(ele.id, 1, ele)}
                        className={cssClass.btn}
                      >
                        +
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>

          <Grid item md={4} sm={7} xs={6} className={cssClass.cartInfo}>
            <h3>
              Look ! <br />
              What you got there:{" "}
            </h3>

            <Grid className={cssClass.cartGroup}>
              {cartFromStore.map((ele, i) => {
                return (
                  <Grid className={cssClass.cartList}>
                    <dl>
                      <dt>
                        <p>{ele.name}</p>
                        <br />
                        <span>x{ele.value}</span>
                      </dt>

                      <dd>{Number(ele.value) * Number(ele.price)}$</dd>
                    </dl>
                  </Grid>
                );
              })}
            </Grid>
            <Grid className={cssClass.cartTotal}>
              <dl>
                <dt>Total:</dt>
                <dd>
                  {cartFromStore.reduce((acc, ele, i) => {
                    return (acc += Number(ele.price * ele.value));
                  }, 0)}
                  $
                </dd>
              </dl>
              <h4>you loyal!</h4>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <h2>You don't have any carts</h2>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cartFromStore: state.shopCart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromStore: id => dispatch({ type: "REMOVE_CART", payload: id }),
    updateValue: (id, value, cal) =>
      dispatch({ type: "UPDATE_CART_VALUE", payload: { id, value, cal } })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
