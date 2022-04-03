import listr from "listr";
import axios from "axios";
import chalk from "chalk";

import ratelimit from "../utils/ratelimit";

import { api } from "../../package.json";
import constants from "../data/constants";

const sendTokens = (wallet: string, network: string) => {
  const tasks = new listr([
    {
      title: `🦄 sending tokens to ${wallet} on ${network}`,
      task: async () => {
        const currentTimestamp = new Date().getTime();
        if (!ratelimit(currentTimestamp)) {
          console.log(
            chalk.redBright(
              `⏳ ratelimit reached, wait for ${chalk.yellow(
                `${constants["ratelimitDurationLocale"]} to get more tokens`
              )}`
            )
          ); // hi ser
          // terminal dekh bsdk
        } else {
          await axios
            .get(`${api}/token?address=${wallet}&network=${network}`)
            .then((res) => {
              if (res.data.insufficientFunds === true) {
                console.log(
                  chalk.redBright(
                    `😿 I'm out of funds! You can use the Chainlink Faucet until I get refilled. https://faucets.chain.link.\nDonate: 0x894b6579524c61b56B3aB5624740464EaDF5237E`
                  )
                );
              } else {
                if (res.data.invalidAddress === true) {
                  console.log(
                    chalk.redBright(`🤷‍♂️ The address provided is invalid`)
                  );
                } else {
                  console.log(
                    chalk.greenBright(
                      `🎉 sent the tokens to ${wallet} on ${network}, check ${res.data.txLink} to verify if the transaction was successful`
                    )
                  );
                }
              }
            });
          console.log("🦄 sent tokens to", wallet, "on", network);
        }
      },
    },
  ]);

  tasks
    .run({
      exitOnError: false,
    })
    .catch((err) => {
      console.error(`😿 ${err}`);
    });
};

export default sendTokens;
