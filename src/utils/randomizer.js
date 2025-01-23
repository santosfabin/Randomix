export class Randomizer {
    constructor(){
        this._list = []
        this._allWinners = []
        this._currentWinners = []
    }

    set list(value){
        this._list = value
        this._allWinners = []
        this._currentWinners = []
    }

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

    addCurrentWinners(){
        for(const winner of this._currentWinners){
            this._allWinners.push(winner)
        }
        this._currentWinners = []
    }

    resetWinners(){
        this._allWinners = []
        this._currentWinners = []
    }

    generateNumberList(min, max){
        this._list = []
        this._allWinners = []
        this._currentWinners = []
        for(let i = min; i <= max; i++){
            this._list.push(i);
        }
    }

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

