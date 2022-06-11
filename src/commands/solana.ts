import { Command } from "@oclif/core";

import inquirer from "inquirer";

import sendTokens from "../lib/sendTokens";
import getAddressFromConfigFile from "../utils/getAddressFromConfigFile";

import solQuestions from "../data/solQuestions";
import createOrUpdateConfigFile from "../utils/createOrUpdateConfigFile";

export default class Solana extends Command {
  static description = "🦄 Get Solana by using the solana command";

  async run() {
    inquirer.prompt(solQuestions).then(async (answers) => {
      if (answers.wallet !== undefined)
        createOrUpdateConfigFile("", answers.wallet);

      await sendTokens(
        getAddressFromConfigFile("solana"),
        answers.network,
        "solana"
      );
    });
  }
}
