import fs from "fs";
import shelljs from "shelljs";

import constants from "../data/constants";

const createOrUpdateConfigFile = (
  address: string | null = null,
  solAddress: string | null = null
) => {
  shelljs.mkdir("-p", constants["configFolderPath"]);

  if (fs.existsSync(constants["configFilePath"])) {
    let config = JSON.parse(
      fs.readFileSync(constants["configFilePath"], "utf-8")
    );

    if (address) {
      config.address = address;
    }

    if (solAddress) {
      config.solAddress = solAddress;
    }

    config = JSON.stringify(config);
    fs.writeFileSync(constants["configFilePath"], config);
  } else {
    const config = JSON.stringify({
      address: address,
      solAddress: solAddress,
    });
    fs.writeFileSync(constants["configFilePath"], config);
  }
};

export default createOrUpdateConfigFile;
