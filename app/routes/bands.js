import Ember from 'ember';

var Band = Ember.Object.extend({
  name: '',
});

var ledZeppelin = Band.create({ name: 'Led Zeppelin' });
var pearlJam = Band.create({ name: 'Pearl Jam' });
var fooFighters = Band.create({ name: 'Foo Fighters' });
var u2 = Band.create({ name: 'U2' });

var bands = [ledZeppelin, pearlJam, fooFighters, u2];

export default Ember.Route.extend({
  model() {
    return bands;
  }
});
