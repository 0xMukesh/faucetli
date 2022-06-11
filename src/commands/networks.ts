import { Command } from "@oclif/core";

import chalk from "chalk";

import networks, { solNetworks } from "../data/networks";

export default class Networks extends Command {
  static description = "🌈 Get the list of all the supported testnets";

  async run() {
    console.log(
      chalk.green("\n🌈 These are the testnets supported by faucetli:")
    );
    console.log();
    console.log(
      chalk.gray("Ethereum") + chalk.blueBright("\n- " + networks.join("\n- "))
    );
    console.log("");
    console.log("Solana" + chalk.blueBright("\n- " + solNetworks.join("\n- ")));
  }
}
