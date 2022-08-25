import { ethers } from "hardhat";

async function main() {
  const Blackadam = await ethers.getContractFactory("BlackAdam");
  const blackadam = await Blackadam.deploy();

  await blackadam.deployed();

  console.log(`Contract deployed to ${blackadam.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
