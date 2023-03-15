// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract GeneralNft721 is ERC721URIStorage {
    uint256 private s_tokenCounter;

    event NftMinted(uint256 indexed tokenId);

    constructor() ERC721("NFT Demo", "DEMO") {
        s_tokenCounter = 0;
    }

    function mintNFT(string memory _tokenURI) public {
        _safeMint(msg.sender, s_tokenCounter);
        emit NftMinted(s_tokenCounter);
        _setTokenURI(s_tokenCounter, _tokenURI);
        s_tokenCounter = s_tokenCounter + 1;
    }

    function getTokenCounter() public view returns (uint256) {
        return s_tokenCounter;
    }
}