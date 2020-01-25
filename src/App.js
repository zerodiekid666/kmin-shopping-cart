import React from "react";
import Products from "./components/Products";
import Detail from "./components/Detail";
import Cart from "./components/Cart";
import Nav from "./components/Nav";
import theme from "./commons/theme";
import Home from "./components/Home";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@material-ui/core";

import { createStore } from "redux";
import { Provider } from "react-redux";

const initState = {
  shopCart: []
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      // find Same index of product
      let indexOfProduct = state.shopCart.findIndex(ele => {
        return ele.id === action.payload.id;
      });

      if (indexOfProduct >= 0) {
        let newCarts = [...state.shopCart];
        newCarts[indexOfProduct].value =
          Number(newCarts[indexOfProduct].value) + Number(action.payload.value);
        return {
          ...state,
          shopCart: newCarts
        };
      } else {
        return {
          ...state,
          shopCart: [...state.shopCart, action.payload]
        };
      }
    }

    case "REMOVE_CART": {
      console.log(action.payload);
      let newCart = [...state.shopCart].filter(ele => {
        return ele.id !== action.payload;
      });

      return {
        ...state,
        shopCart: newCart
      };
    }

    case "UPDATE_CART_VALUE": {
      let indexOfProduct = state.shopCart.findIndex(ele => {
        return ele.id === action.payload.id;
      });

      let newCarts = [...state.shopCart];
      newCarts[indexOfProduct].value =
        Number(newCarts[indexOfProduct].value) + action.payload.value;
      return {
        ...state,
        shopCart: newCarts
      };
    }
    default:
      return state;
  }
};

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <div className="App">
            <Nav />
            <Route exact path="/" component={Home} />
            <Route path="/product" exact component={Products} />
            <Route exact path="/detail/:id" component={Detail} />
            <Route path="/cart" component={Cart} />
          </div>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;
