import fs from "fs";

import { solNetworks } from "./networks";
import constants from "./constants";
import getAddressFromConfigFile from "../utils/getAddressFromConfigFile";

let solQuestions: Array<Object> = [];

if (getAddressFromConfigFile("solana")) {
  solQuestions = [
    {
      type: "list",
      name: "network",
      message: "🦄 enter the network name:",
      default: "devnet",
      choices: solNetworks,
    },
  ];
} else {
  solQuestions = [
    {
      type: "input",
      name: "wallet",
      message: "✨ enter your wallet address:",
      validate: function (value: string) {
        if (value.length) {
          return true;
        } else {
          return "😿 please enter your wallet address";
        }
      },
    },
    {
      type: "list",
      name: "network",
      message: "🦄 enter the network name:",
      default: "devnet",
      choices: solNetworks,
    },
  ];
}

export default solQuestions;
