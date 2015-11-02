import Ember from 'ember';

import Band from '../models/band';
import Song from '../models/song';


var blackDog = Song.create({
  title: 'Black Dog',
  band: 'Led Zeppelin',
  rating: 3
});

var yellowLedbetter = Song.create({
  title: 'Yellow Ledbetter',
  band: 'Pearl Jam',
  rating: 4
});

var pretender = Song.create({
  title: 'The Pretender',
  band: 'Foo Fighters',
  rating: 2
});


var one = Song.create({
  title: 'One',
  band: 'U2',
  rating: 2
});

var ledZeppelin = Band.create({ name: 'Led Zeppelin', songs: [blackDog] });
var pearlJam = Band.create({ name: 'Pearl Jam', songs: [yellowLedbetter] });
var fooFighters = Band.create({ name: 'Foo Fighters', songs: [pretender] });
var u2 = Band.create({ name: 'U2', description: 'The greatest band of all time!', songs: [one] });

var BandsCollection = Ember.Object.extend({
  content: [],
  sortProperties: ['name:desc'],
  sortedContent: Ember.computed.sort('content', 'sortProperties'),
});

var bands = BandsCollection.create();
bands.get('content').pushObjects([ledZeppelin, pearlJam, fooFighters, u2]);

export default Ember.Route.extend({
  model() {
    return bands;
  },
  
  actions: {
    createBand() {
      var name = this.get('controller').get('name');
      var band = Band.create({name: name});
      bands.get('content').pushObject(band);
      this.get('controller').set('name', '');
      this.transitionTo('bands.band.songs', band);
    }
  }
});
