import DS from 'ember-data';


/*

shouldReloadAll(store, snapshot) {
 return store.peekAll( snapshot.type.modelName ).get("length") <= 0;
 },

 shouldReloadAll( store, snapshot ) {

    return !store.peekAll( snapshot.type.modelName ).length;


  }

*/

export default DS.RESTAdapter.extend({

  shouldReloadAll(store, snapshot) {
    return store.peekAll( snapshot.type.modelName ).get("length") <= 0;
  },

  namespace: 'api'
});
