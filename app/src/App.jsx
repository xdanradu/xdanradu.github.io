import React, { Component } from "react";
import NavBar from "./components/navbar/navbar";
import Counters from "./components/counters/counters";
import About from "./components/about/about";
import "./App.css";
import {connect} from 'react-redux';
import {incremented, created, reseted, deleted} from './redux-store/actions';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar totalCounters={this.props.counters.filter((c) => c.value > 0).length}/>

          <Switch>
              <Route exact path="/">
              </Route>
              <Route exact path="/about">
                  <About/>
              </Route>
              <Route exact path="/skills">
                  <Counters
                          onCreate={this.props.created}
                          onReset={this.props.reseted}
                          onIncrement={this.props.incremented}
                          onDelete={this.props.deleted}
                          counters={this.props.counters}
                  />
              </Route>
          </Switch>

      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counters: state.counters
  }
}

const mapDispatchToProps = { incremented, created, reseted, deleted }

export default connect(
        mapStateToProps,
        mapDispatchToProps
)(App);