import {Randomizer} from "../../utils/randomizer.js";
import {InputItens} from "../itens/InputItens.js";
import {
	WinnersList,
	addWinner,
	resetWinner
} from "../winnersList/winnersList.js";
import {NotificationError} from "../modalError/modalError.js";

const random = new Randomizer();

function resetWinners() {
	random.resetWinners();
	resetWinner();
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
function resetPage(containerPage) {
	const page = defaultPage();
	const randoMixDiv = document.getElementById("randomix");
	containerPage.remove();
	randoMixDiv.appendChild(page);
}

function defaultPage() {
	const estruture = document.createElement("main");
	estruture.id = "random-default";
	estruture.innerHTML = `
    <label id="how-many-default">
      <span>How many?</span>
      <input type="number" min="1" />
    </label>

    <label id="last-winners-no">
      <p>Last winners will no longer be sorted</p>
      <input id="input-winners-no" type="checkbox" />
      <span class="checkmark"></span>
    </label>
  `;

	const inputItens = new InputItens(random, estruture);
	const randomizer = document.createElement("button");
	const randomizerContainer = document.createElement("div");
	const returnButton = document.createElement("button");
	const winnersList = WinnersList();

	const winnersChampionsMyFriend = document.createElement("div");
	const resetButton = document.createElement("p");

	resetButton.innerText = "Reset winners";
	resetButton.style.cursor = "pointer";

	randomizer.innerText = "Randomizer";
	randomizer.id = "button-randomizer";
	randomizer.style.cursor = "pointer";

	randomizerContainer.id = "randomizer-container";
	randomizerContainer.appendChild(randomizer);

	returnButton.innerText = "Return";
	returnButton.id = "return-button";
	returnButton.style.cursor = "pointer";

	estruture.appendChild(randomizerContainer);

	estruture.appendChild(resetButton);

	estruture.appendChild(returnButton);

	estruture.appendChild(winnersChampionsMyFriend);

	estruture.appendChild(winnersList);

	resetButton.addEventListener("click", () => {
		resetWinners();
	});

	randomizer.addEventListener("click", () => {
		try {
			const howMany = document.querySelector("#how-many-default input").value;
			const inputWinnersNo = document.querySelector("#input-winners-no").checked;
			const winner = randomix(howMany, inputWinnersNo);
	
			winnersChampionsMyFriend.innerHTML = "";
	
			const div = document.createElement("div");
			const h3 = document.createElement("h3");
			const p = document.createElement("p");
	
			div.id = "winners-container";
			h3.innerHTML = "Winner🥇";
			winner.forEach(element => {
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
	

	returnButton.addEventListener("click", () => {
		resetPage(estruture);
	});

	return inputItens;
}

// apagar isso dai
const randomDefault = document.getElementById("randomix");

randomDefault.appendChild(defaultPage());

// fim apagar isso dai
