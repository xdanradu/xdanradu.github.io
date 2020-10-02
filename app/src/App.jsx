import React, { Component } from "react";
import NavBar from "./components/navbar/navbar";
import Counters from "./components/counters/counters";
import About from "./pages/about/about";
import Skills from "./pages/skills/skills";
import Home from "./pages/home/home";
import "./App.css";
import {connect} from 'react-redux';
import {decremented, incremented, created, reseted, deleted} from './redux-store/actions';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";



class App extends Component {
  render() {
    return (
      <Router>
        <NavBar counters={this.props.counters} onDecrement={this.props.decremented} onIncrement={this.props.incremented}  onReset={this.props.reseted}/>

          <Switch>
              <Route exact path="/">
                  <Home/>
              </Route>
              {/*<Route exact path="/about">
                <About
                    onCreate={this.props.created}
                    onReset={this.props.reseted}
                    onIncrement={this.props.incremented}
                    onDelete={this.props.deleted}
                    counters={this.props.counters}
                />
              </Route>*/}
              <Route exact path="/skills">
                  <Skills
                      onCreate={this.props.created}
                      onReset={this.props.reseted}
                      onIncrement={this.props.incremented}
                      onDecrement={this.props.incremented}
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

const mapDispatchToProps = { decremented, incremented, created, reseted, deleted }

export default connect(
        mapStateToProps,
        mapDispatchToProps
)(App);
