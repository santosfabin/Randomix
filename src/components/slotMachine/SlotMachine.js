import {checkScreenSize, addSlot, removeSlot, lockButtons, unlockButtons} from '../../pages/slot/util.js'
import {ShowItem} from '../slowShow/SlotShow.js'
import {addWinner, resetWinner} from '../../components/winnersList/winnersList.js'

let idInterval = null;

/**
 * Creates the div of the slot machine
 * 
 * @param {Randomizer} randomizer - Instance of the Randomizer class
 * @returns - SlotMachine html element
 */
function SlotMachine(randomizer){
    const slotContainer = document.createElement("div");
    const slotContainerItens = document.createElement("div");
    const slotContainerButtons = document.createElement("div");

    slotContainer.appendChild(slotContainerItens)
    slotContainer.appendChild(slotContainerButtons)

    slotContainerItens.classList.add("slotContainerItens")

    slotContainer.style.display = "flex";
    slotContainer.style.flexDirection = "column";
    slotContainer.style.justifyContent = "center";
    slotContainer.style.alignItems = "center";
    slotContainer.style.gap = "10px";
    slotContainer.style.height = "150px";
    slotContainer.style.width = "fit-content";
    slotContainer.style.padding = "10px";
    slotContainer.style.maxWidth = "1050px";
    slotContainer.style.borderRadius = "20px";
    slotContainer.style.backgroundColor = "#1A3B28";

    slotContainerButtons.style.display = "flex";
    slotContainerButtons.style.gap = "10px";
    slotContainerButtons.style.width = "fit-content";

    slotContainerItens.style.display = "flex";
    slotContainerItens.style.gap = "10px";
    slotContainerItens.style.height = "fit-content";

    slotContainerItens.innerHTML = ""
    slotContainerButtons.innerHTML = ""

    for (let i = 0; i < checkScreenSize(window.innerWidth); i++) {
        slotContainerItens.appendChild(ShowItem())
    }

    slotContainerButtons.appendChild(Button(() => {starSorteio(randomizer)}, "Spin", "buttonStart", "buttonSlot"))
    slotContainerButtons.appendChild(Button(() => {addSlot(randomizer)}, "+", "buttonAddSlot", "buttonSlot"))
    slotContainerButtons.appendChild(Button(removeSlot, "-", "buttonRemoveSlot", "buttonSlot"))
    slotContainerButtons.appendChild(Button(() => {
        randomizer.resetWinners()
        resetWinner()
    }, "Reset", "buttonRestart", "buttonSlot"))

    return slotContainer
}


function Button(action, innerText, ID, classCSS){
    const button = document.createElement("button");
    button.innerText = innerText
    button.id = ID
    button.classList.add(classCSS)

    button.style.backgroundColor = "#f2e8cf";
    button.style.color = "#000";
    button.style.border = "none";
    button.style.fontSize = "1.1rem";
    button.style.padding = "10px 15px";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";

    button.addEventListener("click", action)
    return button
}

/**
 * Creates the element that will be spinned in the slot machine
 * 
 * @param {string} item - Picked value of the randomizer
 * @param {string} place - Postion of the itemSlot
 * @returns ItemSlot html element
 */
function ItemSlot(item, place){
    const itemSlot = document.createElement("div");
    itemSlot.classList.add("itemSlot")
    itemSlot.innerText = item

    itemSlot.style.height = "60px";
    itemSlot.style.width = "100%";
    itemSlot.style.color = "#000";
    itemSlot.style.display = "flex";
    itemSlot.style.justifyContent = "center";
    itemSlot.style.alignItems = "center";
    itemSlot.style.position = "absolute";
    itemSlot.style.fontSize = "20px";

    if (place === "middle"){
        itemSlot.classList.add("middleItem")
    }else{
        itemSlot.classList.add("aboveItem")
    }
    return itemSlot
}

/**
 * Starts to spin the slot machine itens, and after "end" times it stops
 * 
 * @param {Randomizer} randomizer - Instance of the Randomizer class
 */
function starSorteio(randomizer){
    const showSlotItensLenght = document.querySelectorAll(".showSlotItem").length
    const remainingSizeToPick = randomizer.remainingSizeToPick()
    if(!remainingSizeToPick){
        NotificationError("Without itens")
        return
    }
    if (showSlotItensLenght > remainingSizeToPick){
        for(let i = 0; i < showSlotItensLenght - remainingSizeToPick; i++){
            removeSlot()
        }
    }
    if(idInterval){
        NotificationError("Spinning is happening")
        return
    }
    const showSlotItens = document.querySelectorAll(".showSlotItem")
    let i = 0
    const time = 300
    const end = 10
    lockButtons()
    showSlotItens.forEach(element => {
        element.dataset.won = "false"
    })
    start(end, time)
    idInterval = setInterval(() => {start(end, time)}, time)
    let endIteration1 = -(showSlotItens.length - end)
    let endIteration2 = -(showSlotItens.length - end)
    function start(end, time){
        const elementsMiddle = document.querySelectorAll(".middleItem")
        const elementsAbove = document.querySelectorAll(".aboveItem")
        const elementsBellow = document.querySelectorAll(".bellowItem")
        let winner = "";
        if (i == 0){
            elementsMiddle.forEach(element => {
                element.remove()
            })
        }else if(i == end){
            unlockButtons()
            clearInterval(idInterval)
            idInterval = null
        } else{
            elementsAbove.forEach((element, index) => {
                element.style.transition = `top ${time}ms`
                if(elementsBellow.length > 0){
                    elementsBellow[index].remove()
                }
                if(endIteration1 == i){
                    element.classList.remove("aboveItem")
                    element.classList.add("middleItem")
                    element.parentElement.dataset.won = "true"
                    addWinner(randomizer.currentWinners)
                    randomizer.addCurrentWinners()
                    endIteration1++
                } else {
                    element.classList.remove("aboveItem")
                    element.classList.add("bellowItem")
                }
            })

            for (let j = showSlotItens.length -1; j >= 0; j--) { 
                if(showSlotItens[j].dataset.won == "true"){
                    continue
                } else{
                    winner = randomizer.pickValues(1)
                    showSlotItens[j].appendChild(ItemSlot(winner, "above"))
                }
            }
        }  
        i++;
    }
}

export {SlotMachine}