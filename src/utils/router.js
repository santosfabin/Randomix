import { InputItensDefaultPage } from "../pages/defaultRandomizer/index.js";
import { InputItensScratchPage } from "../pages/scratchPage/index.js";
import { InputItensSlotPage } from "../pages/slot/index.js";

function router() {
  return {
    "/Randomix": () => {return InputItensDefaultPage()},
    "/Randomix/scratch": () => {return InputItensScratchPage()},
    "/Randomix/slot": () => {return InputItensSlotPage()},
  };
}

export { router };
