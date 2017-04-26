const SnapGamePage = require('../../src/js/pages/snapGamePage');
<<<<<<< HEAD
const eventHub = require('watch_framework').EventHub;
=======
>>>>>>> 5b682db6daa25d8f5e56f1d1a41e4c7bbbb68bea

let page;

describe('Snap game mechanics', () => {
  beforeEach(() => {
    page = new SnapGamePage();
    page.render();
    page.configureButtons();
  });

<<<<<<< HEAD
  // describe('pressing the face', () => {
  //   it('should call the function changeQuestion', () => {
  //     spyOn(page, 'changeQuestion');
  //     eventHub.trigger('face');
  //     expect(page.changeQuestion).toHaveBeenCalled();
  //   });
  // });

=======
>>>>>>> 5b682db6daa25d8f5e56f1d1a41e4c7bbbb68bea
  describe('changeQuestion functionality', () => {
    it('should change the number shown in the question panel', () => {
      page.$el.find('#questionPanel').text('test');
      page.changeQuestion();
      expect(page.$el.find('#questionPanel')).not.toHaveText('test');
      expect(page.$el.find('#questionPanel')).not.toHaveText('');
<<<<<<< HEAD
    })
=======
    });
>>>>>>> 5b682db6daa25d8f5e56f1d1a41e4c7bbbb68bea
  });

  describe('changeAnswer functionality', () => {
    it('should change the number shown in the answer panel', () => {
      page.$el.find('#answerPanel').text('test');
      page.changeAnswer();
      expect(page.$el.find('#answerPanel')).not.toHaveText('test');
      expect(page.$el.find('#answerPanel')).not.toHaveText('');
<<<<<<< HEAD
    })
=======
    });
>>>>>>> 5b682db6daa25d8f5e56f1d1a41e4c7bbbb68bea
  });
});
