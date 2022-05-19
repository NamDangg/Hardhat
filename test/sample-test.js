const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CrowdFund", function () {
  it("Should return the new greeting once it's changed", async function () {
    const ERC20 = await ethers.getContractFactory("ERC20");
    //const IERC20 = await ethers.getContractFactory("IERC20");
    //const token2 = await IERC20.deploy();
    const token = await ERC20.deploy();
    const CrowdFund = await ethers.getContractFactory("CrowdFund");
    const crowdfund = await CrowdFund.deploy(token.address);

    describe("Launching", () => {
        it("should launch", async () => {
             crowdfund.launch(
                100,
                1652856640,
                1652856740
            )
            expect(await crowdfund.count()).to.equal(1);
        });
        //
        //it("")
    })
  });
});
