export const table = () => {
  let tableContainer = document.createElement('table');
  tableContainer.setAttribute('class', 'leaguesTable mdl-data-table mdl-js-data-table mdl-shadow--2dp full-width');
  return tableContainer;
};

export const thead = () => {
  let tableHead = document.createElement('thead');
  tableHead.innerHTML = `
    <thead>
      <tr>
        <th class="mdl-data-table__cell--non-numeric">Name</th>
        <th>Location</th>
        <th>Members</th>
        <th>Date Created</th>
      </tr>
    </thead>`;
  return tableHead;
};

export const tbody = () => {
  let tableBody = document.createElement('tbody');
  tableBody.innerHTML = '<tbody></tbody>';
  return tableBody;
};

export const row = league => {
  let tableRow = document.createElement('tr');
  tableRow.setAttribute('class', 'leagueRow');
  tableRow.setAttribute('data-id', league.id);
  tableRow.innerHTML = `
    <tr>
      <td class="mdl-data-table__cell--non-numeric">${league.name}</td>
      <td>${league.location}</td>
      <td><div class="mdl-badge" data-badge="${league.members}"></div></td>
      <td>${new Date(Date.parse(league.created)).toDateString()}</td>
    </tr>`;
  return tableRow;
};
