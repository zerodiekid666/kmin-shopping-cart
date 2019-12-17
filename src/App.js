import React from "react";
import Products from "./components/Products";
import Detail from "./components/Detail";
import Cart from "./components/Cart";
import Nav from "./components/Nav";
import theme from "./commons/theme";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@material-ui/core";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Products} />
          <Route path="/product" component={Products} />
          <Route path="/detail" component={Detail} />
          <Route path="/cart" component={Cart} />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;
