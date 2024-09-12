const hre = require('hardhat');

async function main() {
    
    const BuyMeACoffee = await hre.ethers.getContractFactory("BuyMeACoffee");
    const buyMeACoffee = await BuyMeACoffee.deploy();
    await buyMeACoffee.waitForDeployment();
    const contractAddress = await buyMeACoffee.getAddress();
    console.log("BuyMeACoffee deployed to", contractAddress);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    })