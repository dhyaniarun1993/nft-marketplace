# Hardhat NFT Marketplace 

## Setup

#### Install the dependency
Install all the dependencies using below command
```
yarn install
```

#### Run the local environment
Below command run the local node and deploy contract on it
```
yarn hardhat node
```

#### Scripts
We have create scripts for perform different actions on the Marketplace. All scripts can be found inside `script` folder

1. Mint and List NFT
Run following command to list an mint the NFT
```
yarn hardhat run scripts/mint-and-list-item.js --network localhost
```

2. Update Listing
The update listing script works on token id 1. Make sure to create and list the token using mint and list NFT. To update NFT listing for token id 1
```
yarn hardhat run scripts/update-listing.js --network localhost
```

3. Cancel listing
The update listing script works on token id 2. Make sure to create and list the token using mint and list NFT. To cancel NFT listing for token id 2
```
yarn hardhat run scripts/cancel-item.js --network localhost
```

4. Buy Item
Run the following script to simulate buy nft flow
```
yarn hardhat run scripts/buy-item.js --network localhost
```

5. Get seller proceeds
```
yarn hardhat run scripts/get-seller-proceeds.js --network localhost
```