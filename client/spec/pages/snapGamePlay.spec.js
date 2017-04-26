const SnapGamePage = require('../../src/js/pages/snapGamePage');

let page;

describe('Snap game mechanics', () => {
  beforeEach(() => {
    page = new SnapGamePage();
    page.render();
    page.configureButtons();
  });

  describe('changeQuestion functionality', () => {
    it('should change the number shown in the question panel', () => {
      page.$el.find('#questionPanel').text('test');
      page.changeQuestion();
      expect(page.$el.find('#questionPanel')).not.toHaveText('test');
      expect(page.$el.find('#questionPanel')).not.toHaveText('');
    });
  });

  describe('changeAnswer functionality', () => {
    it('should change the number shown in the answer panel', () => {
      page.$el.find('#answerPanel').text('test');
      page.changeAnswer();
      expect(page.$el.find('#answerPanel')).not.toHaveText('test');
      expect(page.$el.find('#answerPanel')).not.toHaveText('');
    });
  });
});
