import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import QuizShow from "./pages/quizShow";
import Checkout from "./pages/checkout";
import "./assets/style.css";

function App() {
    return(
        <Router>
              <Switch>
                <Route exact path = "/" component={QuizShow} />
                <Route exact path = "/checkout" component={Checkout} />
              </Switch>
        </Router>
    )
}

export default App;