import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(committee) {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/committees?apikey=' +key+ '&per_page=50&parent_committee_id=' + committee.committee_id;
    console.log(url);
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.results;
    });
  }
});
