import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  product: {
    position: "relative",
    "& img": {
      maxWidth: "100%"
    },
    "&:hover": {
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 20px"
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
  title: {
    color: "#000",
    maxWidth: "240px",
    height: "50px",
    overflow: "hidden",
    // whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  },
  price: {
    color: "#000",
    marginBottom: "10px"
  }
});

export default function Product(props) {
  const classess = useStyle();
  const { name, id, src, price } = props;
  const handleAddToCart = () => {
    const newProduct = {
      name: name,
      id: id,
      src: src,
      price: price,
      value: 1
    };

    props.addToCart(newProduct);
  };
  return (
    <Box className={classess.product} id={id} p={3}>
      <Link to={`detail/${id}`}>
        <Typography className={classess.forImg}>
          <img alt="aa" src={src} />
        </Typography>
        <Typography className={classess.title}>{name}</Typography>
        <Typography variant="h6" className={classess.price}>
          {price}$
        </Typography>
      </Link>
      <Box className={classess.boxBtn}>
        <Button variant="contained" color="primary" onClick={handleAddToCart}>
          Add
        </Button>
        <Button variant="outlined" color="primary">
          Detail
        </Button>
      </Box>
    </Box>
  );
}
