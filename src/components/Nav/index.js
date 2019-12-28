import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

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
    textDecoration: "none"
  }
});

export default function Nav(props) {
  const classes = useStyles(props);

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
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
