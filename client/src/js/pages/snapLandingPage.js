const Page = require('watch_framework').Page;
const template = require('../../templates/pages/snapLandingPage.hbs');

const snapLandingPage = Page.extend({

  id: 'snapLanding',

  template,

  buttonEvents: {
    face: 'startGame',
    left: 'exitGame',
  },

  startGame() {
    window.App.navigate('snapGame');
  },

  exitGame() {
    window.App.navigate('home');
  },

  render() {
    this.$el.html(this.template());

    return this;
  },

});

module.exports = snapLandingPage;
