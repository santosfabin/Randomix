let winnersList = [];

function createScratchCard(scratchQuantity) {
  const scratchCard = document.createElement("div");
  scratchCard.id = `scratchCard`;

  const headerSection = document.createElement("div");
  headerSection.innerText = `LUCKY SCRATCH CARD`;
  headerSection.id = `headerCardSection`;
  scratchCard.appendChild(headerSection);

  const mainSection = document.createElement("div");
  mainSection.id = `mainCardSection`;
  scratchCard.appendChild(mainSection);

  const textSection = document.createElement("div");
  textSection.innerText = `Se não ganhou, não ganha mais.`;
  textSection.id = `textCardSection`;
  mainSection.appendChild(textSection);

  const scratchSection = document.createElement("div");
  scratchSection.id = `scratchSection`;
  mainSection.appendChild(scratchSection);

  for (let i = 0; i < scratchQuantity; i++) {
    const containerScratch = document.createElement("div");
    containerScratch.className = `scratchContainer`;
    containerScratch.addEventListener("click", showWinner);
    scratchSection.appendChild(containerScratch);
  }

  return scratchCard;
}

function showWinner() {
  this.classList.remove(`scratchContainer`);
  this.classList.add(`scratchContainerWinner`);
  this.removeEventListener("click", showWinner);

  const winnerContainer = document.createElement("div");
  winnerContainer.innerText = winnersList[0];
  winnerContainer.className = `winnerContainer`;
  this.appendChild(winnerContainer);

  winnersList.splice(0, 1);
}