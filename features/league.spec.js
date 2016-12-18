describe('League Smoke Tests', function() {
  describe('When navigating to league homepage', function () {

    it('should have a title set', function () {
      browser.url('http://localhost:3000');
      expect(browser.getHTML('#about')).to.contain('About');
    });

    it('should have an about button', function () {
      browser.url('http://localhost:3000');
      expect(browser.getHTML('#about')).to.contain('About');
    });

    it('should have a leagues table', function () {
      browser.url('http://localhost:3000');
      expect(browser.getHTML('.leaguesTable')).to.contain('Gruesome Gophers');
    });

    it('should populate fields when league row is clicked', function () {
      browser.url('http://localhost:3000');
      browser.click('.leagueRow')[0];
      browser.waitForExist('#leagueName', 5000);
      expect(browser.getValue('#leagueName')).to.contain('Gruesome Gophers'); 
    });
  });
});
