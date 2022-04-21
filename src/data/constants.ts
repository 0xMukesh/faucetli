import os from "os";

const constants = {
  configFilePath: `${os.homedir()}/.config/faucetli/config.json`,
  configFolderPath: `${os.homedir()}/.config/faucetli`,
  ratelimitFilePath: `${os.homedir()}/.config/faucetli/ratelimit.json`,
  ratelimitDuration: 3600000 * 3,
  ratelimitDurationLocale: "3 hours",
  apiUrl: "https://faucetli-backend-production.up.railway.app/api/v1",
};

export default constants;
