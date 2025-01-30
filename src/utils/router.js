import Default from '../pages/home/index.js'
// import Roullet from '../pages/roullet/index.js'
import Scratch from '..pages/scratch/index.js'
import Slot from '../pages/slot/index.js'

function router() {
    const scratch = Scratch()
    const roullet = Roullet()
    const defaultPage = Default()
    const slot = Slot()
    return {
        "/": defaultPage,
        // "/roullet":  roullet,
        "/scratch": scratch,
        "/slot": slot,
    }
}

export { router }