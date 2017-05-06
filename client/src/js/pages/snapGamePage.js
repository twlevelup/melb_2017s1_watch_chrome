const Page = require('watch_framework').Page;
const template = require('../../templates/pages/snapGame.hbs');

const answerChangeIntervalMs = 3000;

const snapGamePage = Page.extend({

  id: 'snapGame',

  timeoutId: undefined,
  currentQuestion: undefined,
  currentAnswer: undefined,
  gameState: 'playing',

  template,

  buttonEvents: {
  //  face: 'changeQuestion',
    face: 'faceAction',
    left: 'exitGame',
  },

  faceAction() {
    if (this.gameState === 'playing') {
      document.getElementById('question').style.display = 'none';
      document.getElementById('response').style.display = 'block';
      this.checkMatch();
      this.gameState = 'results';
    } else {
      document.getElementById('question').style.display = 'block';
      document.getElementById('response').style.display = 'none';
      this.changeQuestion();
      this.gameState = 'playing';
    }
  },

  checkMatch() {
    if (this.currentQuestion === this.currentAnswer) {
      document.getElementById('correctResult').style.display = 'block';
      document.getElementById('wrongResult').style.display = 'none';
    } else {
      document.getElementById('correctResult').style.display = 'none';
      document.getElementById('wrongResult').style.display = 'block';
    }
  },

  exitGame() {
    window.App.navigate('home');
  },

  getRandomInt(min, max) {
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
  },

  getNewQuestion() {
    let newQuestion = this.getRandomInt(0, 5);
    while (newQuestion === this.currentQuestion) {
      newQuestion = this.getRandomInt(0, 5);
    }
    return newQuestion;
  },

  getNewAnswer() {
    let newAnswer = this.getRandomInt(0, 5);
    while (newAnswer === this.currentAnswer) {
      newAnswer = this.getRandomInt(0, 5);
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

  setupGame() {
    this.changeQuestion();
  },

  render() {
    this.$el.html(this.template());

    this.setupGame();

    return this;
  },

});

module.exports = snapGamePage;
