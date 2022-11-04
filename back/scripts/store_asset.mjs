import { NFTStorage, File } from "nft.storage"
import fs from 'fs'
// import dotenv from 'dotenv'
// dotenv.config()

// const { NFT_STORAGE_API_KEY } = process.env

async function storeAsset() {
    const imageFile = fs.readFileSync('assets/art.png')
    const blob = new File(Buffer.from(imageFile), 'art.png')
    console.log(blob)
    const client = new NFTStorage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDgyQUIxOTc0YTI4NkUwNDgzMWM5NDQ1RkJCODZBQzkxYWZkM2VkRUIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1ODc0Mjc4MjMzMCwibmFtZSI6IlRydXN0VGlja2V0cyJ9.LaB9cMGVkBXs2nRsOj6wAQy43bnPGrpvamkfhFR-jaw" })
    const metadata = await client.store({
        name: 'Trust Ticket',
        description: 'Ticket',
        image: blob,
    })
    console.log("Metadata stored on Filecoin and IPFS with URL:", metadata.url)
}

storeAsset()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });