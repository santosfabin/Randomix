import { Randomizer } from "../../utils/randomizer.js";
import { InputItens } from "../../components/itens/InputItens.js";
import {
  WinnersList,
  addWinner,
  resetWinner,
  cleanList,
} from "../../components/winnersList/winnersList.js";
import { NotificationError } from "../../components/modalError/modalError.js";
import { Button } from "../../components/button/button.js";

const random = new Randomizer();

function resetWinners() {
  random.resetWinners();
  resetWinner();
  const p = document.getElementById("container-p-winners");
  p.innerHTML = "";
}

function randomix(amount, actived) {
  if (amount == "") {
    amount = 1;
  }
  const winner = random.pickValues(amount);

  if (actived == true) {
    random.addCurrentWinners();
  }

  return winner;
}

function DefaultPage() {
  const buttonReturn = Button(
    "RETURN",
    "https://santosfabin.github.io/Randomix/src/assets/button/returnButton.svg",
    "linear-gradient(-225deg, #0ba360 0%, #3cba92 100%)",
    () => {
      document.getElementById("random-default").remove();

      document.getElementById("randomix").appendChild(InputItensDefaultPage());
    }
  );

  const estruture = document.createElement("main");
  estruture.id = "random-default";
  estruture.innerHTML = `
    <label id="how-many-default">
      <span>How many?</span>
      <input type="number" min="1" placeholder="1"/>
    </label>

    <label id="last-winners-no">
      <p>Last winners will no longer be sorted</p>
      <input id="input-winners-no" type="checkbox" checked/>
      <span class="checkmark"></span>
    </label>
  `;

  const randomizer = document.createElement("button");
  const randomizerContainer = document.createElement("div");
  const winnersList = WinnersList();

  const winnersChampionsMyFriend = document.createElement("div");
  const resetButton = document.createElement("p");

  resetButton.innerText = "Reset winners";
  resetButton.style.cursor = "pointer";
  resetButton.id = "resetButton";
  resetButton.style.color = "#ff6e6e";

  randomizer.innerText = "Draw";
  randomizer.id = "button-randomizer";
  randomizer.style.cursor = "pointer";

  randomizerContainer.id = "randomizer-container";
  randomizerContainer.appendChild(randomizer);

  estruture.appendChild(randomizerContainer);

  estruture.appendChild(resetButton);

  estruture.appendChild(buttonReturn);

  estruture.appendChild(winnersChampionsMyFriend);

  estruture.appendChild(winnersList);

  resetButton.addEventListener("click", () => {
    resetWinners();
  });

  randomizer.addEventListener("click", () => {
    try {
      const howMany = document.querySelector("#how-many-default input").value;
      const inputWinnersNo =
        document.querySelector("#input-winners-no").checked;
      const winner = randomix(howMany, inputWinnersNo);

      winnersChampionsMyFriend.innerHTML = "";

      const div = document.createElement("div");
      const h3 = document.createElement("h3");
      const p = document.createElement("p");
      p.id = "container-p-winners";

      div.id = "winners-container";
      h3.innerHTML = "Winner🥇";
      winner.forEach((element) => {
        const pElement = document.createElement("p");
        pElement.innerHTML = element;
        p.appendChild(pElement);
      });

      div.appendChild(h3);
      div.appendChild(p);

      winnersChampionsMyFriend.appendChild(div);

      addWinner(winner);
    } catch (e) {
      NotificationError(e);
    }
  });

  return estruture;
}

function InputItensDefaultPage() {
  const inputItens = InputItens(random, DefaultPage, "Default");
  inputItens.id = "inputDefaultPage";
  inputItens.querySelector("button").addEventListener("click", () => {
    cleanList()
  });
  return inputItens;
}

export { InputItensDefaultPage };
