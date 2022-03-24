import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xB8c737b4c4cE68314068ADe6A0eF1DAdf0b02381",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Election Vote Pass",
        description: "This NFT will give you access to 0xDAO!",
        image: readFileSync("scripts/assets/PK.gif"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()