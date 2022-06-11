import axios from "axios";
import chalk from "chalk";
import ora from "ora";

import ratelimit from "../utils/ratelimit";

import constants from "../data/constants";

const sendTokens = async (
  wallet: string,
  network: string,
  blockchain: string = "ethereum"
) => {
  const spinner = ora(`🦄 sending tokens to ${wallet} on ${network}`).start();

  const currentTimestamp = new Date().getTime();
  if (!ratelimit(currentTimestamp)) {
    spinner.fail(
      chalk.redBright(
        `⏳ ratelimit reached, wait for ${chalk.yellow(
          `${constants["ratelimitDurationLocale"]} to get more tokens`
        )}`
      )
    );
  } else {
    const endpoint = blockchain === "ethereum" ? "token" : "solana";
    await axios
      .get(
        `${constants.apiUrl}/${endpoint}?address=${wallet}&network=${network}`
      )
      .then((res) => {
        if (res.data.insufficientFunds === true) {
          spinner.fail(
            chalk.redBright(
              `😿 I'm out of funds! You can use the Chainlink Faucet until I get refilled. https://faucets.chain.link.\nDonate: 0x894b6579524c61b56B3aB5624740464EaDF5237E`
            )
          );
        } else {
          if (res.data.invalidAddress === true) {
            spinner.fail(chalk.redBright(`🤷‍♂️ The address provided is invalid`));
          } else if (res.data.exceedsMaxLimit === true) {
            spinner.fail(
              chalk.redBright(
                `🤷‍♂️ You already have enough tokens to pay the gas fees`
              )
            );
          } else {
            spinner.succeed(
              chalk.greenBright(
                `🎉 sent the tokens to ${wallet} on ${network}, check ${res.data.txLink} to verify if the transaction was successful`
              )
            );
          }
        }
      })
      .catch((err) => {
        spinner.fail(chalk.redBright`😿 ${err}`);
      });
  }
};

export default sendTokens;
