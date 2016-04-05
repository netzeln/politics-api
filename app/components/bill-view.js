import Ember from 'ember';

export default Ember.Component.extend({
  areDetailsShowing: false,

  actions: {
    showDetails(){
      this.set('areDetailsShowing', true);
    },
    hideDetails(){
      this.set('areDetailsShowing', false);
    }
  }
});
