import { OutputView } from "../View/OutputView.js";
import { InputView } from "../View/InputView.js";

import { OUTPUT_MSG } from "../constants.js";

export const bridgeGameController = async () => {
  OutputView.printMsg(OUTPUT_MSG.START_GAME);
  const bridgeSize = await getBridgeSize();
};

const getBridgeSize = async () => {
  const rawInput = await InputView.readBridgeSize();
};
