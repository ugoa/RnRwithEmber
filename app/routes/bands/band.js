import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var bands = this.modelFor('bands');
    return bands.get('content').findBy('slug', params.slug)
  }
});
