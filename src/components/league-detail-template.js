export const leagueDetailForm = (name, location, members, created) => {
  const form = document.createElement('form');

  form.innerHTML = `
    <form action="#">
      <div class="mdl-grid">
        <label for="leagueName">Name</label>
        <input type="text" id="leagueName" value="${name}">
      </div>
      <div class="mdl-grid">
          <label for="leagueLocation">Location</label>
          <input type="text" id="leagueLocation" value="${location}">
      </div>
      <div class="mdl-grid">
          <label for="leagueMembers">Members</label>
          <input type="text" id="leagueMembers" value="${members}">
      </div>
      <div class="mdl-grid">
          <label for="leagueCreated">Created</label>
          <input type="text" id="leagueCreated" value="${new Date(Date.parse(created)).toDateString()}"
      </div>
    </form>
  `;

  return form;
};
