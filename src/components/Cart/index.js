import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    cartPropsFromStore: state.myCart
  };
};
function Cart(props) {
  return (
    <div>
      <h1>Cart Page</h1>
      {/* {console.log(props)} */}
      {/* <h2>{props.cartFromStore}</h2> */}
    </div>
  );
}

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
