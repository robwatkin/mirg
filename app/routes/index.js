import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {

    // var foofs = [];

    // foofs.push(this.store.createRecord('foof', {name: 'foo one'}));
    // foofs.push(this.store.createRecord('foof', {name: 'foo two'}));
    // foofs.push(this.store.createRecord('foof', {name: 'foo three'}));

    return this.store.findAll('foof');
  }
});
