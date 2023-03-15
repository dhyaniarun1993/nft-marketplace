/////////////////////
// MINT AND LIST //
/////////////////////
const { ethers } = require("hardhat")

const PRICE = ethers.utils.parseEther("0.1")

async function mintAndList() {
    const accounts = await ethers.getSigners()
    const [deployer, owner, buyer1] = accounts
    const IDENTITIES = {
        [deployer.address]: "DEPLOYER",
        [owner.address]: "OWNER",
        [buyer1.address]: "BUYER_1",
    }

    const nftMarketplaceContract = await ethers.getContract("NftMarketplace")
    const nftContract = await ethers.getContract("GeneralNft721")

    console.log(`Minting NFT for ${owner.address}`)
    const mintTx = await nftContract.connect(owner).mintNFT("ipfs://QmaVkBn2tKmjbhphU7eyztbvSQU5EXDdqRyXZtRhSGgJGo")
    const mintTxReceipt = await mintTx.wait(1)
    const tokenId = mintTxReceipt.events[0].args.tokenId

    console.log("Approving Marketplace as operator of NFT...")
    const approvalTx = await nftContract
        .connect(owner)
        .approve(nftMarketplaceContract.address, tokenId)
    await approvalTx.wait(1)

    console.log("Listing NFT...")
    const tx = await nftMarketplaceContract
        .connect(owner)
        .listItem(nftContract.address, tokenId, PRICE)
    await tx.wait(1)
    console.log("NFT Listed with token ID: ", tokenId.toString())

    const mintedBy = await nftContract.ownerOf(tokenId)
    console.log(
        `NFT with ID ${tokenId} minted and listed by owner ${mintedBy} with identity ${IDENTITIES[mintedBy]}.`
    )
}

mintAndList()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
