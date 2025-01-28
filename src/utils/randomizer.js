/**
 * Represents an item picker.
 * 
 * @class
 */
export class Randomizer {
    /** 
     * Creates an item picker.
     * 
     * @param {list} list - The itens that can/can't be picked.
     * @param {list} allWinners - The itens that can't be picked.
     * @param {list} currentWinners - The itens that were last picked.
     */
    constructor(){
        this._list = []
        this._allWinners = []
        this._currentWinners = []
    }
    /** 
     * Set the itens that can/can't be picked, it cleans the other lists
     * 
     * @param {list} value - List of itens.
     */
    set list(value){
        this._list = value
        this._allWinners = []
        this._currentWinners = []
    }

    /** 
     * Pick x random values from list 
     * 
     * @param {list} number - The quantity of itens that will be picked.
     * 
     * @returns {list} A list with the itens that were picked
     */
    pickValues(number = 1){
        this._currentWinners = []

        if(this._list.length == 0){
            throw new Error("There is no values in your list")
        }
        else if(number > this._list.length - this._allWinners.length){
            throw new Error("You can't pick more values than the size of your list")
        }
        else {
            let i = 0
            while(i < number){
                const pickedValue = this._list[(Math.random() * (this._list.length - 1)).toFixed(0)]
                if(!this._allWinners.includes(pickedValue) && !this._currentWinners.includes(pickedValue)){
                    this._currentWinners.push(pickedValue)
                    i++;
                }
            }
        }

        return this._currentWinners
    }

    /** 
     * Makes items that were picked last unable to be picked again
     */
    addCurrentWinners(){
        for(const winner of this._currentWinners){
            this._allWinners.push(winner)
        }
        this._currentWinners = []
    }
    /** 
     * Makes items that were unable to be picked able to be picked again
     */
    resetWinners(){
        this._allWinners = []
        this._currentWinners = []
    }

    /**
     * Generate a list of numbers and put it in the list attribute
     * 
     * @param {int} min start of the range
     * @param {int} max end of the range(inclusive)
     */
    generateNumberList(min, max){
        this._list = []
        this._allWinners = []
        this._currentWinners = []
        for(let i = min; i <= max; i++){
            this._list.push(i);
        }
    }

    /**
     * Gives the amouth of itens that can be picked
     * 
     * @returns {int} the amouth of itens that can be picked
     */
    remainingSizeToPick(){
        return this._list.length - this._allWinners.length
    }

    get list(){
        return this._list
    }

    get allWinners(){
        return this._allWinners
    }

    get currentWinners(){
        return this._currentWinners
    }

}

