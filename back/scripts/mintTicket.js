
const hardhat = require("hardhat")


async function mintTicket(contractAddress, metaDataURL, xToMint, price) {
    const TrustTicket = await hardhat.ethers.getContractFactory("TrustTicketMarketplace")
    const [owner] = await hardhat.ethers.getSigners()
    console.log(xToMint, metaDataURL, price)
    await TrustTicket.attach(contractAddress).mintMultiple(xToMint, metaDataURL, price)
    console.log("NFT minted to: ", contractAddress)
}

module.exports = { mintTicket }