import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  product: {
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
    backgroundColor: "black"
  }
});

export default function Product(props) {
  const classess = useStyle();
  const { name, id, src, price } = props;
  const handleAddToCart = () => {
    const { name, id, src, price } = props;
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
    <Box width="25%" className={classess.product} id={id} p={3}>
      <Link to={`detail/${id}`}>
        <img alt="aa" src={src} />
        <Typography>{name}</Typography>
        <Typography variant="h6">{price}$</Typography>
      </Link>
      <Button variant="contained" color="primary" onClick={handleAddToCart}>
        Add
      </Button>
      <Button variant="outlined" color="primary">
        Detail
      </Button>
    </Box>
  );
}
