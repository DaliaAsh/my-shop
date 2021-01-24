import React from "react";
import EntryPage from "./containers/EntryPage/EntryPage";
import SignUpPage from "./containers/SignUpPage/SignUpPage";
import MainPage from "./containers/MainPage/MainPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/main" component={MainPage} exact />
        <Route path="/sign-up" component={SignUpPage} exact />
        <Route path="/" component={EntryPage} exact />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
