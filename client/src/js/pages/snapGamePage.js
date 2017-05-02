const Page = require('watch_framework').Page;
const template = require('../../templates/pages/snapGame.hbs');

const snapGamePage = Page.extend({

  id: 'snapGame',

  template,

  buttonEvents: {
    face: 'changeQuestion',
  },

  getRandomInt(min, max) {
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
  },

  changePanel(selector) {
    this.$el.find(selector).text(this.getRandomInt(0, 10));
  },

  changeQuestion() {
    this.changePanel('#questionPanel');
  },

  changeAnswer() {
    this.changePanel('#answerPanel');
  },

  render() {
    this.$el.html(this.template());
    return this;
  },

});

module.exports = snapGamePage;
