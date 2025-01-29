import { Button } from "../../components/button/button.js";

import { InputItens } from "../../components/itens/InputItens.js";

import { WinnersList } from "../../components/winnersList/winnersList.js";

import { Randomizer } from "../../utils/randomizer.js";

import { createScratchCard, createSratch } from "./scratchCardComponent.js";

const raffleMaker = new Randomizer();

function ScratchPage() {
  const mainPage = SecondPage();

  const inputItens = InputItens(raffleMaker, mainPage);

  inputItens.querySelector("button").addEventListener("click", () => {
    createSratch(raffleMaker);
  });

  return inputItens;
}

function SecondPage() {
  const scratchPage = document.createElement("div");
  scratchPage.id = `scratchPage`;

  const scratchCard = createScratchCard();
  scratchPage.appendChild(scratchCard);

  const winnersList = WinnersList();
  scratchPage.appendChild(winnersList);

  const buttonReturn = Button(
    "RETURN",
    "/src/assets/button/returnButton.svg",
    "linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%)",
    () => {
      document.getElementById("scratchPage").remove();

      document.getElementById("app").appendChild(ScratchPage());
    }
  );
  scratchPage.appendChild(buttonReturn);

  return scratchPage;
}

document.getElementById("app").appendChild(ScratchPage());