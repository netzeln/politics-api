import Ember from 'ember';

export default Ember.Route.extend({
  model: function(committee) {
    var url = 'http://congress.api.sunlightfoundation.com/committees?apikey=f30272e3e9d74359ab7869a25fb93aa1&per_page=50&parent_committee_id=' + committee.committee_id;
    console.log(url);
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.results;
    });
  }
});
