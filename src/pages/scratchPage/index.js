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

  const scratchPageSection1 = document.createElement("div")
  scratchPageSection1.id = "scratchPageSection1"
  scratchPage.appendChild(scratchPageSection1);

  const scratchCard = createScratchCard();
  scratchPageSection1.appendChild(scratchCard);

  const buttonReturn = Button(
    "RETURN",
    "/src/assets/button/returnButton.svg",
    "linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%)",
    () => {
      document.getElementById("scratchPage").remove();

      document.getElementById("randomix").appendChild(ScratchPage());
    }
  );
  scratchPageSection1.appendChild(buttonReturn);

  const winnersList = WinnersList();
  scratchPage.appendChild(winnersList);

  return scratchPage;
}

export { ScratchPage };