import Ember from 'ember';

export default Ember.Controller.extend({
  songCreationStarted: false,
  
  noSongs: Ember.computed('model.songs.length', function() {
    return this.get('model.songs.length') === 0;
  }),

  canCreateSong: Ember.computed('songCreationStarted', 'model.songs.length', function() {
    return this.get('songCreationStarted') || this.get('model.songs.length');
  }),

  actions: {
    enableSongCreation() {
      this.set('songCreationStarted', true);
    },

    updateRating(params){
      var song = params.item,
          rating = params.rating;

      song.set('rating', rating);
    }
  }
});
