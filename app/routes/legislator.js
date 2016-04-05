import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function (bill) {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/legislators?apikey=' +key+ '&bioguide_id=' + bill.sponsor_id;

    var url2 = 'http://congress.api.sunlightfoundation.com/bills?apikey=' +key+ '&sponsor_id=' + bill.sponsor_id;

    return Ember.RSVP.hash({
      legislator: Ember.$.getJSON(url).then(function(responseJSON){
        return responseJSON.results;
      }),
      bills: Ember.$.getJSON(url2).then(function(responseJSON){
        return responseJSON.results;
      })
    });
 }
});
