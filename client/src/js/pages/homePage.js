const Page = require('watch_framework').Page;

const template = require('../../templates/pages/home.hbs');
const $ = require('jquery');

const homePage = Page.extend({

  id: 'home',

  template,

  buttonEvents: {
    left: 'goToContacts',
    right: 'goToContacts',
    top: 'scrollUp',
    bottom: 'scrollDown',
  },

  goToContacts() {
    window.App.navigate('contacts');
  },

  scrollUp() {
    $('#watch-face').animate({ scrollTop: '-=190px' });
  },

  scrollDown() {
    $('#watch-face').animate({ scrollTop: '+=70px' });
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
