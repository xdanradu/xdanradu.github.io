import React, { Component, lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Shop from './pages/showcase/shop';
import {Store} from "./mobx-store/Store";

const store = new Store()
const NavBar = lazy(() => import('./components/navbar/navbar'));
const Home = lazy(() => import('./pages/home/home'));

class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading... </div>}>
          <NavBar store = {store} />
        </Suspense>

        <div className="page-layout">
          <Switch>
            <Route exact path="/">
              <Suspense fallback={<div>Loading... </div>}>
                <Home />
              </Suspense>
            </Route>
            <Route exact path="/shop">
              <Shop store={store}/>
            </Route>
          </Switch>
        </div>
        <div id="bottom-menu">&copy; 2022</div>
      </Router>
    );
  }
}




export default App;
