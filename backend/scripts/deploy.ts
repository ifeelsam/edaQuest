import "@nomicfoundation/hardhat-ethers";
import hre from "hardhat";

// async function main() {
//   console.log(
//     "Deploying contracts with the account:",
//     (await hre.ethers.getSigners())[0].address
//   );
//
//   // We get the contract to deploy
//   const StudyTracker = await hre.ethers.getContractFactory("StudyTracker");
//
//   const studyTracker = await StudyTracker.deploy();
//
//   await studyTracker.waitForDeployment();
//
//   console.log("StudyTracker deployed to:", await studyTracker.getAddress());
// }
//
// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });


async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with account:", deployer);

  const EdaQuestSubscription = await hre.ethers.getContractFactory("EdaQuestSubscription");
  const edaQuest = await EdaQuestSubscription.deploy("PAYMENT_TOKEN_ADDRESS");

  await edaQuest.deployed();
  console.log("EdaQuestSubscription deployed to:", edaQuest.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
