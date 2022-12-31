const scoreTable = document.getElementById('score-table');
const topScore = JSON.parse(localStorage.getItem('topScore')) || [];

//taking an array from topScore and converting into a new array of html li elements
scoreTable.innerHTML = topScore
  .map(function (result) {
    return `<li class='table-input'> ${result.userName}:\u00A0\u00A0\u00A0\u00A0 ${result.result}</li>`;
  })
  .join("");