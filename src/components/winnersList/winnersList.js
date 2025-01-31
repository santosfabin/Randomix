let remenberingOldWinners;

function WinnersList() {
  remenberingOldWinners = [];

  const containerList = document.createElement("div");
  containerList.id = `containerList`;

  const imageContainer = document.createElement("div");
  imageContainer.id = `imageContainer`;
  containerList.appendChild(imageContainer);

  const listSection = document.createElement("div");
  listSection.id = `listSection`;
  containerList.appendChild(listSection);

  return containerList;
}

function addWinner(winner) {
  document.getElementById("listSection").innerHTML = ``;

  winner.forEach((element) => {
    remenberingOldWinners.push(element);
  });
  console.log(remenberingOldWinners);
  remenberingOldWinners.forEach((element, index) => {
    const winnerContainer = document.createElement("div");
    winnerContainer.className = `winnerContainer`;
    document.getElementById("listSection").appendChild(winnerContainer);

    const winnerPosition = document.createElement("p");
    winnerPosition.className = `winnerPosition`;
    winnerContainer.appendChild(winnerPosition);

    switch (index) {
      case 0:
        winnerPosition.innerText = `🥇 Place`;
        break;

      case 1:
        winnerPosition.innerText = `🥈 Place`;
        break;

      case 2:
        winnerPosition.innerText = `🥉 Place`;
        break;

      default:
        winnerPosition.innerText = `${index + 1}º Place`;

        break;
    }

    const winnerText = document.createElement("p");
    winnerText.innerText = element;
    winnerContainer.appendChild(winnerText);
  });
}

function resetWinner() {
  remenberingOldWinners = [];
  document.getElementById("listSection").innerHTML = "";
}

function cleanList() {
  remenberingOldWinners = [];

  console.log("Limpando: " + remenberingOldWinners);
}

export { WinnersList, addWinner, resetWinner, cleanList };
