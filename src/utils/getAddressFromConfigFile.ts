import fs from "fs";

import constants from "../data/constants";

const getAddressFromConfigFile = () => {
  const configFile = fs.readFileSync(constants["configFilePath"], "utf8");
  const config = JSON.parse(configFile);
  return config.address;
};

export default getAddressFromConfigFile;
