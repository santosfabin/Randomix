import {DefaultPage} from '../pages/defaultRandomizer/index.js'
import {ScratchPage} from '../pages/scratchPage/index.js'
import {SlotPage} from '../pages/slot/index.js'

function router() {
    const scratchPage = ScratchPage()
    const defaultPage = DefaultPage()
    const slotPage = SlotPage()
    return {
        "/": defaultPage,
        "/scratch": scratchPage,
        "/slot": slotPage,
    }
}

export { router }

