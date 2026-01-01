import { OutputView } from "../View/OutputView.js";
import { OUTPUT_MSG } from "../constants.js";

export const bridgeGameController = async () => {
  OutputView.printMsg(OUTPUT_MSG.START_GAME);
};
