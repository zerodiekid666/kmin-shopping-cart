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
  myCart: []
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      // find Same index of product
      let indexOfProduct = state.myCart.findIndex(ele => {
        return ele.id === action.payload.id;
      });

      if (indexOfProduct >= 0) {
        let newCarts = [...state.myCart];
        newCarts[indexOfProduct].value =
          Number(newCarts[indexOfProduct].value) + Number(action.payload.value);
        return {
          ...state,
          myCart: newCarts
        };
      } else {
        return {
          ...state,
          myCart: [...state.myCart, action.payload]
        };
      }
    }

    case "REMOVE_CART": {
      let newCart = [...state.myCart].filter(ele => {
        return ele.id !== action.payload;
      });

      console.log(action.payload);
      return {
        ...state,
        myCart: newCart
      };
    }

    case "UPDATE_CART_VALUE": {
      let indexOfProduct = state.myCart.findIndex(ele => {
        return ele.id === action.payload.id;
      });

      console.log(action.payload.id);
      console.log(action.payload.value);

      let newCarts = [...state.myCart];
      newCarts[indexOfProduct].value = action.payload.value;
      return {
        ...state,
        myCart: newCarts
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
