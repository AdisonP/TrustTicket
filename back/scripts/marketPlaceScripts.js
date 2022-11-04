const hardhat = require("hardhat")

async function mintTicket() {

    const TrustTicket = await hardhat.ethers.getContractFactory("TrustTicketMarketplace")
    const [owner] = await hardhat.ethers.getSigners()
    const price = hardhat.ethers.utils.parseUnits("1", "wei")
    await TrustTicket.attach("0x3A3Ce88348a39753AcB41762B631EC20e36D2A5D").createToken("ipfs://QmZt6WD8L4ChUkrm2zJ9GD9KRoKGxsYmxbrxg5bPqFp5oY", price, { value: price })
    console.log("NFT minted to: ", owner.address)
}


async function executeSale() {
    const TrustTicket = await hardhat.ethers.getContractFactory("TrustTicketMarketplace")
    let listingPrice = await TrustTicket.attach("0x3A3Ce88348a39753AcB41762B631EC20e36D2A5D").getListingPrice()
    listingPrice = listingPrice.toString()

    const auctionPrice = hardhat.ethers.utils.parseUnits('1', 'wei')
    const [buyerAddress] = await hardhat.ethers.getSigners()


    /* execute sale of token to another user */
    await TrustTicket.attach("0x3A3Ce88348a39753AcB41762B631EC20e36D2A5D").connect(buyerAddress).createMarketSale(1, "0x66f6f64C0F00948aBC748B66EE5Eb3E944501e99", "", { value: auctionPrice })

    // /* resell a token */0x99465D009610545cdD11FbB0b4C7562826051615
    // await TrustTicket.attach("0x3A3Ce88348a39753AcB41762B631EC20e36D2A5D").connect(buyerAddress).resellToken(1, auctionPrice, { value: listingPrice })

    /* query for and return the unsold items */
    items = await TrustTicket.attach("0x3A3Ce88348a39753AcB41762B631EC20e36D2A5D").fetchMarketItems()
    items = await Promise.all(items.map(async i => {
        const tokenUri = await TrustTicket.attach("0x3A3Ce88348a39753AcB41762B631EC20e36D2A5D").tokenURI(i.tokenId)
        let item = {
            price: i.price.toString(),
            tokenId: i.tokenId.toString(),
            seller: i.seller,
            owner: i.owner,
            tokenUri
        }
        return item
    }))
    console.log('items: ', items)


    console.log("Creating random wallet...")
    wallet = ethers.Wallet.createRandom();
}



module.exports = { mintTicket, executeSale }