import os from "os";

const constants = {
  configFilePath: `${os.homedir()}/.config/faucetli/config.json`,
  configFolderPath: `${os.homedir()}/.config/faucetli`,
  ratelimitFilePath: `${os.homedir()}/.config/faucetli/ratelimit.json`,
  ratelimitDuration: 60000,
  ratelimitDurationLocale: "1 minute",
};

export default constants;
