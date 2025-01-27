import {Randomizer} from '../../utils/randomizer.js'
import SlotMachine from './SlotMachine.js'
import {checkScreenSize, removeSlot} from './util.js'

const sortear = new Randomizer()
const appDiv = document.getElementById("app")
let lista = ["Anderson", "Gabriel"]
sortear.list = lista;

appDiv.appendChild(SlotMachine(sortear))

window.addEventListener("resize", e => {
    const showSlotItens = document.querySelectorAll(".showSlotItem")
    const showSlotItensLenght = document.querySelectorAll(".showSlotItem").length
    if(showSlotItensLenght > checkScreenSize(window.innerWidth)){
        removeSlot()
    }
})