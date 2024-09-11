const hre = require('hardhat')

async function getBalance(address) {
    const balanceBigInt = await hre.ethers.provider.getBalance(address);

    return hre.ethers.formatEther(balanceBigInt)
}

async function printBalance(addresses) {
    let idx = 0;
    for (const address of addresses) {
        console.log(`Address ${idx} balance:`, await getBalance(address));
        idx++;
    }
}

async function printMemos(memos) {
    for (const memo of memos) {
        const timestamp = memo.timestamp;
        const tipper = memo.name;
        const tipperAddress = memo.from;
        const message = memo.message;
        console.log(`At ${timestamp}, ${tipper} (${tipperAddress}) said: "${message}"`);
    }
}

async function main() {
    const [owner, tipper, tipper2, tipper3] = await hre.ethers.getSigners();

    const BuyMeACoffee = await hre.ethers.getContractFactory("BuyMeACoffee");
    const buyMeACoffee = await BuyMeACoffee.deploy();
    await buyMeACoffee.waitForDeployment();
    const contractAddress = await buyMeACoffee.getAddress();
    console.log("BuyMeACoffee deployed to", contractAddress);

    const addresses = [owner.address, tipper.address, contractAddress];
    console.log("== start ==");
    await printBalance(addresses)

    const tip = { value: hre.ethers.parseEther("1") };
    await buyMeACoffee.connect(tipper).buyCoffee("tipper1", "first message", tip)
    await buyMeACoffee.connect(tipper2).buyCoffee("tipper2", "second message", tip)

    console.log("== bought coffee ==");
    await printBalance(addresses)

    await buyMeACoffee.connect(owner).withdrawTips();
    console.log("== withdraw tips ==");
    await printBalance(addresses)

    console.log("== memos ==");
    const memos = await buyMeACoffee.getMemos();
    printMemos(memos);
}


main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    })