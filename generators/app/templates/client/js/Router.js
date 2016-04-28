import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import HelloApp from './components/HelloApp';
import AboutApp from './components/AboutApp';

ReactDom.render((
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRoute component={HelloApp}/>
      <Route path="/aboutapp" component={AboutApp}/>
    </Route>
  </Router>
), document.getElementById('helloapp'));
