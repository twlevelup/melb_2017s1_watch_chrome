const Page = require('watch_framework').Page;
const template = require('../../templates/pages/snapGame.hbs');

const answerChangeIntervalMs = 3000;

const snapGamePage = Page.extend({

  id: 'snapGame',

  timeoutId: undefined,
  currentQuestion: undefined,
  currentAnswer: undefined,

  template,

  buttonEvents: {
    face: 'changeQuestion',
  },

  getRandomInt(min, max) {
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
  },

  getNewQuestion() {
    let newQuestion = this.getRandomInt(0, 10);
    while (newQuestion === this.currentQuestion) {
      newQuestion = this.getRandomInt(0, 10);
    }
    return newQuestion;
  },

  getNewAnswer() {
    let newAnswer = this.getRandomInt(0, 10);
    while (newAnswer === this.currentAnswer) {
      newAnswer = this.getRandomInt(0, 10);
    }
    return newAnswer;
  },

  changePanel(selector, value) {
    this.$el.find(selector).text(value);
  },

  changeQuestion() {
    const newQuestion = this.getNewQuestion();
    this.currentQuestion = newQuestion;
    this.changePanel('#questionPanel', newQuestion);
    this.changeAnswer();
  },

  changeAnswer() {
    const newAnswer = this.getNewAnswer();
    this.currentAnswer = newAnswer;
    this.changePanel('#answerPanel', newAnswer);
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
