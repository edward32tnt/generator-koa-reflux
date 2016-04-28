import React, {PropTypes, Component} from 'react';
import {IndexLink, Link} from 'react-router';

import Refux from 'reflux';

class AboutApp extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        AboutApp
        <IndexLink to="/" activeStyle={{color:'blue'}}>Home</IndexLink>
        <Link to="/aboutapp" activeStyle={{color:'blue'}}>About</Link>

      </div>
    )
  }
}

export default AboutApp;
