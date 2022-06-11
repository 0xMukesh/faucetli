import networks from "./networks";
import getAddressFromConfigFile from "../utils/getAddressFromConfigFile";

let questions: Array<Object> = [];

if (getAddressFromConfigFile("ethereum")) {
  questions = [
    {
      type: "list",
      name: "network",
      message: "🦄 enter the network name:",
      default: "mumbai",
      choices: networks,
    },
  ];
} else {
  questions = [
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
      default: "mumbai",
      choices: networks,
    },
  ];
}

export default questions;
