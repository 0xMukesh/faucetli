import { Command } from "@oclif/core";

import chalk from "chalk";

export default class Funding extends Command {
  static description =
    "🎉 If you found this faucet useful and want to keep it going we accept donations on this address: 0x894b6579524c61b56B3aB5624740464EaDF5237E";

  async run() {
    console.log(
      chalk.green(
        `\n🎉 If you found this faucet useful and want to keep it going we accept donations on this address: ${chalk.bold(
          chalk.blue("0x894b6579524c61b56B3aB5624740464EaDF5237E")
        )}\nLink: ${chalk.blue(
          "https://rinkeby.etherscan.io/address/0x894b6579524c61b56B3aB5624740464EaDF5237E"
        )}`
      )
    );
  }
}
