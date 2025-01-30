import ShowItem from '../../components/slowShow/SlotShow.js'

import {NotificationError} from '../../components/modalError/modalError.js'

export function checkScreenSize(size){
    if(size > 900){
        return 5
    }else if(size > 700){
        return 4
    }else if(size > 550){
        return 3
    }else {
        return 2
    }
}

export function addSlot(randomizer){
    const showSlotItensLenght = document.querySelectorAll(".showSlotItem").length
    const remainingSizeToPick = randomizer.remainingSizeToPick()
    const slotContainerItens = document.getElementsByClassName("slotContainerItens")[0]
    if (remainingSizeToPick <= showSlotItensLenght || checkScreenSize(window.innerWidth) == showSlotItensLenght){
        NotificationError("Não é possível adicionar mais slots")
        return
    }
    slotContainerItens.appendChild(ShowItem())
}

export function removeSlot(){
    const showSlotItens = document.querySelectorAll(".showSlotItem")
    const showSlotItensLenght = document.querySelectorAll(".showSlotItem").length
    if(showSlotItensLenght == 1){
        NotificationError("Não é possível remover mais slots")
        return
    }
    showSlotItens[0].remove()
}

export function lockButtons(){
    const buttons = document.querySelectorAll(".buttonSlot");
    buttons.forEach(button => {
        button.disabled = true
        button.style.cursor = "not-allowed"
    })
}

export function unlockButtons(){
    const buttons = document.querySelectorAll(".buttonSlot");
    buttons.forEach(button => {
        button.disabled = false
        button.style.cursor = "pointer"
    })
}