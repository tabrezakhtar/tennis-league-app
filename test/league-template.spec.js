var expect = require("chai").expect,
var LeagueTemplate = require("../src/components/league-template");
var leagueTemplate;

before(function() {
  leagueTemplate = LeagueTemplate();
});

describe("When loading the league template", function() {
  it("It should return the header template", function() {
    console.log(leagueTemplate.table());
    expect(leagueTemplate.table()).to.contain('<table>');
  });
});
