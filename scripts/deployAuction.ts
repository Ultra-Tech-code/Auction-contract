import { ethers } from "hardhat";

async function main() {
  const Auction = await ethers.getContractFactory("auction");
  const auction = await Auction.deploy();

  await auction.deployed();

  console.log(`Contract deployed to ${auction.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
