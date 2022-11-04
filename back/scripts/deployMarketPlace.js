const hardhat = require("hardhat")


async function deployContract() {
    const TrustTicket = await hardhat.ethers.getContractFactory("TrustTicketMarketplace")
    const ticket = await TrustTicket.deploy()
    await ticket.deployed()
    // This solves the bug in Mumbai network where the contract address is not the real one
    const txHash = ticket.deployTransaction.hash
    const txReceipt = await hardhat.ethers.provider.waitForTransaction(txHash)
    const contractAddress = txReceipt.contractAddress
    console.log("Contract just deployed to address:", contractAddress)
    return contractAddress
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.



module.exports = { deployContract };

