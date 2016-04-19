import Reflux from 'reflux';
import HelloActions from '../actions/HelloActions';

var todoCount = 4

export default Reflux.createStore({
  items: ['1','2','3'],
  listenables: [HelloActions],
  add (inn) {
    this.items.push(''+todoCount);
    todoCount += 1;
    this.trigger(this.items)
  },
  remove (id) {
    this.items.splice(id, 1);
    if (todoCount>1) todoCount -= 1;
    this.trigger(this.items);
  }
})
