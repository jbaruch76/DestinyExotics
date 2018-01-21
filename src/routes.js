import React, {Component} from 'react';
import { Main, Header } from './components';
import {Route, Switch, Router} from 'react-router-dom'
import history from './history'



class Routes extends Component {
  render() {
    return (
      <div>
      <Router history={history}>
        <Main>
          <Switch>
            <Route path="/auth" />
          </Switch>
        </Main>
      </Router>
      </div>
    )
  }
}

export default Routes;
