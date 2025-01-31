import { Button } from "../../components/button/button.js";

import { InputItens } from "../../components/itens/InputItens.js";

import {
  WinnersList,
  cleanList,
} from "../../components/winnersList/winnersList.js";

import { Randomizer } from "../../utils/randomizer.js";

import {
  createScratchCard,
  createSratch,
} from "../../components/scratchCard/scratchCardComponent.js";

const raffleMaker = new Randomizer();

function InputItensScratchPage() {

  const inputItens = InputItens(raffleMaker, ScratchPage, "Scratch");

  inputItens.querySelector("button").addEventListener("click", () => {
    createSratch(raffleMaker);
    cleanList()
  });

  return inputItens;
}

function ScratchPage() {
  const scratchPage = document.createElement("div");
  scratchPage.id = `scratchPage`;

  const scratchPageSection1 = document.createElement("div");
  scratchPageSection1.id = "scratchPageSection1";
  scratchPage.appendChild(scratchPageSection1);

  const scratchCard = createScratchCard();
  scratchPageSection1.appendChild(scratchCard);

  const buttonReturn = Button(
    "RETURN",
    "https://santosfabin.github.io/Randomix/src/assets/button/returnButton.svg",
    "linear-gradient(-225deg, #0ba360 0%, #3cba92 100%)",
    () => {
      document.getElementById("scratchPage").remove();
      document.getElementById("randomix").appendChild(InputItensScratchPage());
    }
  );
  scratchPageSection1.appendChild(buttonReturn);

  const winnersList = WinnersList();
  scratchPage.appendChild(winnersList);

  return scratchPage;
}

export { InputItensScratchPage };
