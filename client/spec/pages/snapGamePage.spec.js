const SnapGamePage = require('../../src/js/pages/snapGamePage');
const eventHub = require('watch_framework').EventHub;

let page;

describe('Snap game mechanics', () => {
  beforeEach(() => {
    page = new SnapGamePage();
    page.render();
  });

  describe('pressing the face', () => {
    it('should call the function changeQuestion', () => {
      const spy = spyOn(page, 'changeQuestion');
      page.configureButtons();
      eventHub.trigger('face');
      expect(spy).toHaveBeenCalled();
    });
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

  describe('setAnswerInterval functionality', () => {
    it('should change the answer after 3s', () => {
      const spy = spyOn(page, 'changeAnswer');
      jasmine.clock().install();
      page.setAnswerTimeout(3000);
      expect(spy).not.toHaveBeenCalled();
      jasmine.clock().tick(3001);
      expect(spy).toHaveBeenCalled();
      jasmine.clock().uninstall();
    });
  });

  describe('pressing the left watch button', () => {
    it('should return to clock page', () => {
      spyOn(window.App, 'navigate');
      page.configureButtons();
      eventHub.trigger('left');
      expect(window.App.navigate).toHaveBeenCalledWith('home');
    });
  });
});
