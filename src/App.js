import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/header";
import Book from "./Book";
import Home from "./Home";
import Confirm from "./Confirm";

const Routes = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/confirm" component={Confirm} />
        <Route exact path="/:id" component={Book} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

function App() {
  return (
    <div>
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
