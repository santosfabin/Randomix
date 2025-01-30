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
	const returnButton = document.createElement("button");
	const winnersList = WinnersList();

	const winnersChampionsMyFriend = document.createElement("div");
	const resetButton = document.createElement("p");
	resetButton.innerText = "Reset winners";
	resetButton.style.cursor = "pointer";

	randomizer.innerText = "Randomizer";
	randomizer.id = "button-randomizer"
	randomizer.style.cursor = "pointer";

	returnButton.innerText = "Return";
	returnButton.style.cursor = "pointer";

	estruture.appendChild(randomizer);

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
			const inputWinnersNo =
				document.querySelector("#input-winners-no").checked;
			const winner = randomix(howMany, inputWinnersNo);

			winnersChampionsMyFriend.innerHTML = "";
			winner.forEach(element => {
				winnersChampionsMyFriend.innerHTML += element;
			});

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
