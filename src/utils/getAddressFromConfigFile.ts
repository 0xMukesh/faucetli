import fs from "fs";

import constants from "../data/constants";

const getAddressFromConfigFile = (blockchain: string = "ethereum") => {
  if (fs.existsSync(constants["configFilePath"])) {
    const configFile = fs.readFileSync(constants["configFilePath"], "utf8");
    const config = JSON.parse(configFile);
    return blockchain === "ethereum" ? config.address : config.solAddress;
  }
};

export default getAddressFromConfigFile;
