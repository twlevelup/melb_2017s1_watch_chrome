const Page = require('watch_framework').Page;

const template = require('../../templates/pages/home.hbs');

const homePage = Page.extend({

  id: 'home',

  template,

  buttonEvents: {
    bottom: 'launchSnapLandingPage',
  },

  launchSnapLandingPage() {
    window.App.navigate('snapLanding');
  },

  render() {
    this.$el.html(this.template());
    return this;
  },

  formatHours(hh) {
    const hstring = hh.toString();
    if (hstring.length === 2) {
      return hstring;
    }
    return `0${hstring}`;
  },
});

module.exports = homePage;
