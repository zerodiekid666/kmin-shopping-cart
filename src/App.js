import React from "react";
import Products from "./components/Products";
import Detail from "./components/Detail";
import Cart from "./components/Cart";
import Nav from "./components/Nav";
import theme from "./commons/theme";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@material-ui/core";

import { createStore } from "redux";
import { Provider } from "react-redux";

const initState = {
  myCart: [
    {
      name: "The Family T-Shirt In Black",
      price: 18.5,
      size: "M",
      value: "2",
      src:
        "https://product.hstatic.net/1000042622/product/10_56afc8c6744a48e5a88b5c275151e290_master.jpg"
    },
    {
      name: "The Family T-Shirt In Black",
      price: 18.5,
      size: "M",
      value: "8",
      src:
        "https://product.hstatic.net/1000042622/product/10_56afc8c6744a48e5a88b5c275151e290_master.jpg"
    },
    {
      name: "The Family T-Shirt In Black",
      price: 18.5,
      size: "M",
      value: "2",
      src:
        "https://product.hstatic.net/1000042622/product/10_56afc8c6744a48e5a88b5c275151e290_master.jpg"
    }
  ]
};

const rootReducer = (state = initState, action) => {
  return state;
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
            <Route exact path="/" component={Products} />
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
