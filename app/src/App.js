import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";
import {connect} from 'react-redux';
import {incremented, created, reseted, deleted} from './redux/actions';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.props.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onCreate={this.props.created}
            onReset={this.props.reseted}
            onIncrement={this.props.incremented}
            onDelete={this.props.deleted}
            counters={this.props.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counters: state.counters
  }
}

const mapDispatchToProps = { incremented, created, reseted, deleted }

export default connect(
        mapStateToProps,
        mapDispatchToProps
)(App);
