import React, {Component} from 'react';
import { Main } from './components';import {Route, Switch, Router} from 'react-router-dom'
import history from './history'



class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Main>
          <Switch>
          </Switch>
        </Main>
      </Router>
    )
  }
}

export default Routes;
