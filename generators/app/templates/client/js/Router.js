import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, Link} from 'react-router';

import HelloApp from './components/HelloApp';

ReactDom.render((
  <Router>
    <Route path='/' component={HelloApp}>
    </Route>
  </Router>
), document.getElementById('helloapp'));
