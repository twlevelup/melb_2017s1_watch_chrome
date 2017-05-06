const SnapLandingPage = require('../../src/js/pages/snapLandingPage');
const eventHub = require('watch_framework').EventHub;

let page;

describe('Snap landing page', () => {
  beforeEach(() => {
    page = new SnapLandingPage();
    page.render();
  });

  describe('pressing the watch face', () => {
    it('should start the snap game', () => {
      spyOn(window.App, 'navigate');
      page.configureButtons();
      eventHub.trigger('face');
      expect(window.App.navigate).toHaveBeenCalledWith('snapGame');
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
