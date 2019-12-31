import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Icon
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    color: "white",
    position: "fixed",
    top: "0",
    left: "0"
  },
  link: {
    color: "white",
    textDecoration: "none",
    position: "relative",
    "& span": {
      background: "#d4471c",
      padding: "2px",
      width: "22px",
      height: "22px",
      lineHeight: "22px",
      display: "block",
      position: "absolute",
      top: "-10px",
      right: "-30px",
      borderRadius: "50%"
    }
  },
  cart: {}
});

function Nav(props) {
  const classes = useStyles(props);
  const { cartFromStore } = props;
  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Icon edge="start" color="inherit" aria-label="menu"></Icon>
          <Typography variant="h6">Kmin Fashion</Typography>
          <Box ml="auto">
            <Button>
              <Link className={classes.link} to="/product">
                Products
              </Link>
            </Button>
            <Button>
              <Link className={classes.link} to="/detail">
                Detail
              </Link>
            </Button>
            <Button>
              <Link className={classes.link} to="/cart">
                Cart
                <span>{cartFromStore}</span>
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    cartFromStore: state.myCart.reduce((a, ele, i) => {
      return (a += parseInt(ele.value));
    }, 0)
  };
};
const mapDispatchToProps = null;
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
