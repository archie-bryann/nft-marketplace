require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();

// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// https://docs.polygon.technology/docs/develop/network-details/network

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      // Polygon mumbai
      url: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_POLYGON_MUMBAI_PROJECT_ID}`,
      accounts: [privateKey],
    },
    mainnet: {
      // Polygon Mainnet
      url: `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_POLYGON_MUMBAI_PROJECT_ID}`,
      accounts: [privateKey],
    },
  },
};
