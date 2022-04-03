import fs from "fs";
import shelljs from "shelljs";

import constants from "../data/constants";

const createConfigFile = (address: string) => {
  shelljs.mkdir("-p", constants["configFolderPath"]);
  fs.appendFileSync(constants["configFilePath"], `{"address":"${address}"}`);
};

export default createConfigFile;
