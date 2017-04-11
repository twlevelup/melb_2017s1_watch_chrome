const HomePage = require('../../src/js/pages/homePage');
const App = require('../../src/js/app');
const eventHub = require('watch_framework').EventHub;

let page;

window.App = App;

describe('The Home Page', () => {
  beforeEach(() => {
    page = new HomePage();
  });

  describe('button event handlers', () => {
    describe('right', () => {
      it('should take the user to the contacts page', () => {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('right');
        expect(window.App.navigate).toHaveBeenCalledWith('contacts');
      });
    });

    describe('top', () => {
      it('should scroll the watch face up', () => {
        spyOn(page, 'scrollUp');
        page.configureButtons();
        eventHub.trigger('top');
        expect(page.scrollUp).toHaveBeenCalled();
      });
    });

    describe('bottom', () => {
      it('should scroll the watch face down', () => {
        spyOn(page, 'scrollDown');
        page.configureButtons();
        eventHub.trigger('bottom');
        expect(page.scrollDown).toHaveBeenCalled();
      });
    });
  });

  // describe('time', () => {
  // it('should show current time', () => {
  //   page.render();
  //   expect().toContainText((new Date).getHours());
  // });

  describe('formatHours', () => {
    it('should be 07 if it is 7am zero padded', () => {
      expect(page.formatHours(7)).toEqual('07');
    });
    it('should be 11 if it is 11am', () => {
      expect(page.formatHours(11)).toEqual('11');
    });
    it('should be 00 if it is 12am', () => {
      expect(page.formatHours(0)).toEqual('00');
    });
  });
});
