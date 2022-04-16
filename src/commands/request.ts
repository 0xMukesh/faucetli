import { Command } from "@oclif/core";

import inquirer from "inquirer";

import createConfigFile from "../utils/createConfigFile";
import sendTokens from "../lib/sendTokens";
import getAddressFromConfigFile from "../utils/getAddressFromConfigFile";

import questions from "../data/questions";

export default class Request extends Command {
  static description = "🦄 Get testnet tokens by using request command";

  async run() {
    inquirer.prompt(questions).then(async (answers) => {
      if (answers.wallet !== undefined) {
        createConfigFile(answers.wallet);
        await sendTokens(getAddressFromConfigFile(), answers.network);
      } else {
        await sendTokens(getAddressFromConfigFile(), answers.network);
      }
    });
  }
}
