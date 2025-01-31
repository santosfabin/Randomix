import { Randomizer } from "../../utils/randomizer.js";
import { SlotMachine } from "../../components/slotMachine/SlotMachine.js";
import { checkScreenSize, removeSlot } from "./util.js";
import { InputItens } from "../../components/itens/InputItens.js";
import {
  WinnersList,
  resetWinner,
  cleanList,
} from "../../components/winnersList/winnersList.js";
import { Button } from "../../components/button/button.js";
const sortear = new Randomizer();

function SlotPage() {
  const containerSlotPage = document.createElement("div");
  const slotMachine = SlotMachine(sortear);
  const winnersList = WinnersList();
  const buttonRETURN = Button(
    "RETURN",
    "https://santosfabin.github.io/Randomix/src/assets/button/returnButton.svg",
    "linear-gradient(-225deg, #0ba360 0%, #3cba92 100%)",
    () => {
      resetPage(containerSlotPage);
    }
  );

  containerSlotPage.id = "SlotPage";
  containerSlotPage.style.display = "flex";
  containerSlotPage.style.flexDirection = "column";
  containerSlotPage.style.alignItems = "center";
  containerSlotPage.style.padding = "20px";
  containerSlotPage.style.paddingTop = "50px";
  containerSlotPage.style.paddingBottom = "50px";
  containerSlotPage.style.gap = "10px";
  containerSlotPage.style.width = "100%";

  buttonRETURN.classList.add("buttonRETURN");
  containerSlotPage.appendChild(slotMachine);
  containerSlotPage.appendChild(buttonRETURN);
  containerSlotPage.appendChild(winnersList);

  return containerSlotPage
}

function InputItensSlotPage(){
  const inputItens = InputItens(sortear, SlotPage, "Slot");
  inputItens.id = "inputSlotPage";
  return inputItens;
}

function resetPage(containerPage) {
  const randoMixDiv = document.getElementById("randomix");
  containerPage.remove();
  randoMixDiv.appendChild(InputItensSlotPage());
}

window.addEventListener("resize", () => {
  const showSlotItensLenght = document.querySelectorAll(".showSlotItem").length;
  if (showSlotItensLenght > checkScreenSize(window.innerWidth)) {
    removeSlot();
  }
});

export { InputItensSlotPage };
