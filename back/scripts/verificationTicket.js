const hardhat = require("hardhat")

async function checkIfTokenIsOwned(tokenId, contractAddress) {
    const TrustTicket = await hardhat.ethers.getContractFactory("TrustTicketMarketplace")
    const [owner] = await hardhat.ethers.getSigners()
    const tokenOwner = await TrustTicket.attach(contractAddress).ownerOf(tokenId)
    return tokenOwner == contractAddress
}

// async function checkIfTokenIsUnique(tokenId, contractAddress) {
//     const TrustTicket = await hardhat.ethers.getContractFactory("TrustTicketMarketplace")
//     const [owner] = await hardhat.ethers.getSigners()
//     const isUnique = await TrustTicket.attach(contractAddress).isUnique(tokenId)
//     return isUnique
// }

// async function checkTokenContract(tokenId, contractAddress) {
//     const TrustTicket = await hardhat.ethers.getContractFactory("TrustTicketMarketplace")
//     const [owner] = await hardhat.ethers.getSigners()
//     const tokenOwner = await TrustTicket.attach(contractAddress).isTokenContract(tokenId)
//     return tokenOwner === owner.address
// }

async function check(tokenId, contractAddress) {
    const TrustTicket = await hardhat.ethers.getContractFactory("TrustTicketMarketplace")
    const [owner] = await hardhat.ethers.getSigners()
    const tokenOwner = await TrustTicket.attach(contractAddress).checkTicketExists(tokenId)
    return tokenOwner
}

module.exports = {checkIfTokenIsOwned, check}