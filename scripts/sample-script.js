const hre = require("hardhat");

async function main() {

  const ERC20 = await ethers.getContractFactory("ERC20");
    const token = await ERC20.deploy();
    const CrowdFund = await ethers.getContractFactory("CrowdFund");
  const crowdfund = await CrowdFund.deploy(token.address);
  console.log("Crowdfunding deployed to:", crowdfund.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });