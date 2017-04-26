const Page = require('watch_framework').Page;
const template = require('../../templates/pages/snapGame.hbs');

const answerChangeIntervalMs = 3000;

const snapGamePage = Page.extend({

  id: 'snapGame',

  timeoutId: undefined,

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
    this.changeAnswer();
  },

  changeAnswer() {
    this.changePanel('#answerPanel');
    this.setAnswerTimeout(answerChangeIntervalMs);
  },

  setAnswerTimeout(timeInterval) {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    this.timeoutId = setTimeout(this.changeAnswer.bind(this), timeInterval);
  },

  render() {
    this.$el.html(this.template());

    // use render to initialise our timing since it will be
    // called by the framework
    this.setAnswerTimeout(answerChangeIntervalMs);

    return this;
  },

});

module.exports = snapGamePage;
