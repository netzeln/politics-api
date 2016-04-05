import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=f30272e3e9d74359ab7869a25fb93aa1&zip=' + params.zip;
      return Ember.$.getJSON(url).then(function(responseJSON){
        return responseJSON.results;
      });
  }
});
