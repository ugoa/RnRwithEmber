import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var bands = this.modelFor('bands');
    return bands.get('content').findBy('slug', params.slug)
  },

  afterModel(band) {
    var desc = band.get('description');

    if (Ember.isEmpty(desc)) {
      this.transitionTo('bands.band.songs');
    } else {
      this.transitionTo('bands.band.details');
    }
  }
});
