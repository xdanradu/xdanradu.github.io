import React, { Component, lazy, Suspense } from "react";
import Skills from "./pages/skills/skills";
import "./App.css";
import {connect} from 'react-redux';
import {decremented, incremented, created, reseted, deleted} from './redux-store/actions';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Shop from "./pages/shop/shop";

const NavBar = lazy(() => import("./components/navbar/navbar"));
const Home = lazy(() => import("./pages/home/home"));

class App extends Component {
  render() {
    return (
      <Router>
          <Suspense fallback={<div>Loading... </div>}>
            <NavBar counters={this.props.counters} onDecrement={this.props.decremented} onIncrement={this.props.incremented}  onReset={this.props.reseted}/>
          </Suspense>

          <div className="page-layout">
          <Switch>
              <Route exact path="/">
                  <Suspense fallback={<div>Loading... </div>}>
                    <Home/>
                  </Suspense>
              </Route>
              <Route exact path="/skills">
                  <Skills/>
              </Route>
              <Route exact path="/shop">
                  <Shop
                      onCreate={this.props.created}
                      onReset={this.props.reseted}
                      onIncrement={this.props.incremented}
                      onDecrement={this.props.incremented}
                      onDelete={this.props.deleted}
                      counters={this.props.counters}
                  />
              </Route>
          </Switch>
          </div>
          <div id="bottom-menu">&copy; 2020</div>
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
