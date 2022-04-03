import fs from "fs";
import constants from "../data/constants";

const ratelimit = (timestamp: number) => {
  if (fs.existsSync(constants["ratelimitFilePath"])) {
    const data = fs.readFileSync(constants["ratelimitFilePath"], "utf8");

    if (timestamp >= parseInt(JSON.parse(data)["reset"])) {
      fs.writeFileSync(
        constants["ratelimitFilePath"],
        JSON.stringify({
          reset: timestamp + constants["ratelimitDuration"],
        })
      );
      return true;
    } else {
      return false;
    }
  } else {
    fs.writeFileSync(
      constants["ratelimitFilePath"],
      JSON.stringify({
        reset: timestamp + constants["ratelimitDuration"],
      })
    );
    return true;
  }
};

export default ratelimit;
