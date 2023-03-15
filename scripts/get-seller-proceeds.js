/////////////////////
// CHECK SELLER PROCEEDS //
/////////////////////

const { ethers, network } = require("hardhat")

async function getProceeds() {
    const accounts = await ethers.getSigners()
    const [deployer, owner] = accounts

    const nftMarketplaceContract = await ethers.getContract("NftMarketplace")
    const nftContract = await ethers.getContract("GeneralNft721")

    const proceeds = await nftMarketplaceContract.getProceeds(owner.address)

    const proceedsWei = ethers.utils.formatEther(proceeds.toString())
    console.log(`Seller ${owner.address} has ${proceedsWei} eth!`)
}

getProceeds()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })