require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers")
const dotenv = require('dotenv')
dotenv.config();

const SEPOLIA_URL = process.env.SEPOLIA_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

console.log(SEPOLIA_URL);


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [PRIVATE_KEY]
    }
  }
};
