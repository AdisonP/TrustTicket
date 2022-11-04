const hardhat = require("hardhat")


async function burnTicket(tokenId, contractAddress) {
    tokenId = parseInt(tokenId)
    const TrustTicket = await hardhat.ethers.getContractFactory("TrustTicketMarketplace")
    const [owner] = await hardhat.ethers.getSigners()
    await TrustTicket.attach(contractAddress).burn(tokenId)
    console.log("NFT burned to: ", owner.address)
}

async function burnMultipleTickets(tokenIdList, contractAddress) {
    var tokenIds = []
    for (let i = 0; i < tokenIdList; i++) {
        tokenIds.push(i)
    }

    const TrustTicket = await hardhat.ethers.getContractFactory("TrustTicketMarketplace")
    const [owner] = await hardhat.ethers.getSigners()
    await TrustTicket.attach(contractAddress).burnMultiple(tokenIds)
    console.log("NFT burned to: ", owner.address)
}

module.exports = { burnTicket, burnMultipleTickets }