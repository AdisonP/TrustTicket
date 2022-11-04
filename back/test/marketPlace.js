const { expect } = require("chai");

describe("MarketPlace contract", function () {
    it("Should deploy marketplace,  mint two tokens and sell them to owner", async function () {
        //Deploy the contract
        const MarketPlace = await ethers.getContractFactory("TrustTicketMarketplace")
        const TrustTickets = await MarketPlace.deploy()
        expect(await TrustTickets.deployed())
        const [owner] = await ethers.getSigners();
        // This solves the bug in Mumbai network where the contract address is not the real one
        const txHash = TrustTickets.deployTransaction.hash
        const txReceipt = await ethers.provider.waitForTransaction(txHash)
        const contractAddress = txReceipt.contractAddress

        console.log("Owner of contract is : " + owner.address + ", contract deployed to: " + contractAddress)

        //Get listing price
        console.log("Getting listing price from contract...")
        let listingPrice = await TrustTickets.getListingPrice()
        listingPrice = listingPrice.toString()
        console.log("Listing price = " + listingPrice)

        //Set auction price
        const auctionPrice = ethers.utils.parseUnits("1", "wei")

        //Create tokens
        console.log("Creating tokens")
        expect(await TrustTickets.createToken("ipfs://QmZt6WD8L4ChUkrm2zJ9GD9KRoKGxsYmxbrxg5bPqFp5oY", auctionPrice, { value: listingPrice }), "Token1 failed to create")
        expect(await TrustTickets.createToken("ipfs://QmZt6WD8L4ChUkrm2zJ9GD9KRoKGxsYmxbrxg5bPqFp5oY", auctionPrice, { value: listingPrice }), "Token2 failed to create")



        console.log("Creating random wallet...")
        buyer = ethers.Wallet.createRandom();
        // add the provider from Hardhat
        buyer = buyer.connect(ethers.provider);
        // send ETH to the new wallet so it can perform a tx
        console.log("Sending funds to buyer wallet")
        await owner.sendTransaction({ to: buyer.address, value: ethers.utils.parseUnits("1", "wei") });
        console.log("buyer wallet address is" + buyer.address)

        console.log("Creating organisator wallet")
        organisator = ethers.Wallet.createRandom();
        // add the provider from Hardhat
        organisator = organisator.connect(ethers.provider);
        // send ETH to the new wallet so it can perform a tx
        console.log("Organisator wallet is:" + organisator.address)
        console.log("Creating sale")

        await TrustTickets.connect(owner).createMarketSale(1, buyer.address, "0x99465D009610545cdD11FbB0b4C7562826051615", { value: auctionPrice })
        var orgBalance = await TrustTickets.balanceOf(organisator.address)
        console.log("Balance of organisator wallet is now" + orgBalance)

        /* query for and return the unsold items */
        items = await TrustTickets.fetchMarketItems()
        items = await Promise.all(items.map(async i => {
            const tokenUri = await TrustTickets.tokenURI(i.tokenId)
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
    })


    // it("Should mint a token with predifined metadata uri"), async function () {
    //     //Attach existing contract

    //     //Listing price
    //     const price = ethers.utils.parseUnits("1", "wei")
    //     const MarketPlace = await ethers.getContractFactory("TrustTicketMarketplace")
    //     await MarketPlace.attach(contractAddress)

    // }


})