import React, {PropTypes, Component} from 'react';
import ReactRouter from 'react-router';

import Refux from 'reflux';

import HelloStores from '../stores/HelloStores';

import HelloActions from '../actions/HelloActions';

class HelloApp extends Component {
  constructor (props) {
    super(props);
    this.state = { items: HelloStores.items, }
    this.unsubscribe = HelloStores.listen(this.onStatusChange.bind(this))
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  onStatusChange (items) {
    this.setState({
      items:items,
    })
  }

  _handleAdd () {
    HelloActions.add('hahaha')
  }

  _handleRemove (){
    HelloActions.remove(this.state.items.length-1)
  }

  render () {
    var items = this.state.items.map(function(n, i) { return (<div>{i}.{n}</div>) })
    return (
      <div>
        HelloApp
        <button onClick={this._handleAdd.bind(this)}>add</button>
        <button onClick={this._handleRemove.bind(this)}>remove</button>
        {items}
      </div>
    )
  }
}

export default HelloApp;
