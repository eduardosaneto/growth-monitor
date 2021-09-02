import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import GlobalStyle from "./assets/styles/styledComponents/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
