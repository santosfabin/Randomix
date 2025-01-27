import {checkScreenSize, addSlot, removeSlot, lockButtons, unlockButtons} from './util.js'
import ShowItem from './SlotShow.js'

let idInterval = null;

export default function SlotMachine(randomizer){
    const slotContainer = document.createElement("div");
    const slotContainerItens = document.createElement("div");
    const slotContainerButtons = document.createElement("div");
    slotContainer.appendChild(slotContainerItens)
    slotContainer.appendChild(slotContainerButtons)
    slotContainerItens.classList.add("slotContainerItens")
    slotContainer.classList.add("slotContainer")
    slotContainerButtons.classList.add("slotContainerButtons")
    slotContainerItens.innerHTML = ""
    slotContainerButtons.innerHTML = ""
    for (let i = 0; i < checkScreenSize(window.innerWidth); i++) {
        slotContainerItens.appendChild(ShowItem())
    }
    slotContainerButtons.appendChild(Button(() => {}, "Sortear", "buttonStart", "buttonSlot"))
    slotContainerButtons.appendChild(Button(() => {}, "+", "buttonAddSlot", "buttonSlot"))
    slotContainerButtons.appendChild(Button(() => {}, "-", "buttonRemoveSlot", "buttonSlot"))
    slotContainerButtons.appendChild(Button(() => {}, "Reiniciar", "buttonRestart", "buttonSlot"))
    return slotContainer
}

function Button(action, innerText, ID, classCSS){
    const button = document.createElement("button");
    button.innerText = innerText
    button.id = ID
    button.classList.add(classCSS)
    button.addEventListener("click", action)
    return button
}

