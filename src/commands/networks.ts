import { Command } from "@oclif/core";

import chalk from "chalk";

import networks from "../data/networks";

export default class Networks extends Command {
  static description = "🌈 Get the list of all the supported testnets";

  async run() {
    console.log(
      chalk.green("\n🌈 These are the testnets supported by faucetli:")
    );
    console.log(chalk.blueBright("\n- " + networks.join("\n- ")));
  }
}
