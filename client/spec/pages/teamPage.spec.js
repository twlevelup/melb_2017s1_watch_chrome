const TeamPage = require('../../src/js/pages/teamPage');

let page;

describe('Check-in dance', () => {
  beforeEach(() => {
    page = new TeamPage();
    page.render();
  });

  describe('initial git commit', () => {
    it('should include the text "Made by:"', () => {
      expect(page.$el).toContainText('Made by:');
    });

    it('should include the name "Jenny"', () => {
      expect(page.$el).toContainText('Jenny');
    });

    it('should include the name "Jonathon"', () => {
      expect(page.$el).toContainText('Jonathon');
    });
    // TODO: Add a test to check for your name
    describe('check names on teamPage - "Seoyoon"',() => {
      it('should include the text "Seoyoon"', () => {
        expect(page.$el).toContainText('Seoyoon');
    });
    })
    describe('check names on teamPage - "Byron"',() => {
      it('should include the text "Byron"', () => {
        expect(page.$el).toContainText('Byron');
    });
    })


  });
});
