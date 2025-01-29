import {Randomizer} from '../../utils/randomizer.js'
import SlotMachine from './SlotMachine.js'
import {checkScreenSize, removeSlot} from './util.js'
import {InputItens} from '../../components/itens/InputItens.js'
import {WinnersList} from '../../components/winnersList/winnersList.js'
import {Button} from '../../components/button/button.js'

function SlotPage(){
    const sortear = new Randomizer()
    const containerSlotPage = document.createElement("div")
    const inputItens = InputItens(sortear, containerSlotPage)
    const slotMachine = SlotMachine(sortear)
    const winnersList = WinnersList()
    const buttonRETURN = Button(
    "RETURN",
    "/src/assets/button/returnButton.svg",
    "linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%)",
    () => {resetPage(containerSlotPage)}
    );
    containerSlotPage.id = "SlotPage"
    inputItens.id = "inputSlotPage"
    buttonRETURN.classList.add("buttonRETURN")
    containerSlotPage.appendChild(slotMachine)
    containerSlotPage.appendChild(buttonRETURN)
    containerSlotPage.appendChild(winnersList)

    return inputItens
}

function resetPage(containerPage){
    const randoMixDiv = document.getElementById("randomix")
    containerPage.remove()
    randoMixDiv.appendChild(SlotPage())
}

window.addEventListener("resize", e => {
    const showSlotItens = document.querySelectorAll(".showSlotItem")
    const showSlotItensLenght = document.querySelectorAll(".showSlotItem").length
    if(showSlotItensLenght > checkScreenSize(window.innerWidth)){
        removeSlot()
    }
})