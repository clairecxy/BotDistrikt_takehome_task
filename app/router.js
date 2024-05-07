import EmberRouter from '@ember/routing/router';
import config from 'ember-quickstart/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('menu');
  this.route('home');
});

Router.reopen({
  didTransition() {
    this._super(...arguments);
    if (this.url === '/') {
      this.transitionTo('home');
    }
  },
});
