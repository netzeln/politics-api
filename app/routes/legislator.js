import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function (bill) {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/legislators?apikey=' +key+ '&bioguide_id=' + bill.sponsor_id;
console.log(url);
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.results;
    });
  }
});
