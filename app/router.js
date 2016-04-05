import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  this.route('committees');
  this.route('subcommittee', {path: '/subcommittee/:committee_id'});
  this.route('recent-bills');
  this.route('legislator', {path: '/legislator/:sponsor_id'});
});

export default Router;
