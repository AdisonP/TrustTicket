// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract TrustTicketMarketplace is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    Counters.Counter private _itemsSold;

    uint256 listingPrice = 1 wei;
    address payable owner;

    mapping(uint256 => MarketItem) private idToMarketItem;
    mapping(uint256 => Event) public events;

    struct Event {
        address admin;
        string name;
        uint256 date;
        uint256 price;
        uint256 ticketCount;
        uint256 ticketRemaining;
    }

    struct MarketItem {
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    event MarketItemCreated(
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

    constructor() ERC721("TrustTicketEvent", "TTE") {
        owner = payable(msg.sender);
    }

    /*Burn de billets */

    function burnMultiple(uint256[] memory tokenId) public {
        require(
            owner == msg.sender,
            "Seul le proprietaire du contrat peut burn des billets"
        );
        for (uint256 i = 0; i < tokenId.length; i++) {
            _burn(tokenId[i]);
        }
    }

    function burn(uint256 tokenId) public {
        require(
            owner == msg.sender,
            "Seul le proprietaire du contrat peut burn un billet"
        );
        _burn(tokenId);
    }

    /* Mise a jour du pris de listing */
    function updateListingPrice(uint256 _listingPrice) public payable {
        require(
            owner == msg.sender,
            "Seul le proprietaire du markteplace peut mettre a jour le prix de mise en vente"
        );
        listingPrice = _listingPrice;
    }

    /* Retourne le prix de list du contrat */
    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    }

    // /* Mint un token et le list sur le marketplace */
    // function createToken(string memory tokenURI, uint256 price)
    //     public
    //     payable
    //     returns (uint256)
    // {
    //     _tokenIds.increment();
    //     uint256 newTokenId = _tokenIds.current();

    //     _mint(msg.sender, newTokenId);
    //     _setTokenURI(newTokenId, tokenURI);
    //     createMarketItem(newTokenId, price);
    //     return newTokenId;
    // }

    function mintMultiple(
        uint256 numberToMint,
        string[] memory tokenURI,
        uint256 price
    ) public payable {
        for (uint256 i = 0; i < numberToMint; i++) {
            _tokenIds.increment();
            uint256 newTokenId = _tokenIds.current();
            _mint(msg.sender, newTokenId);
            _setTokenURI(newTokenId, tokenURI[i]);
            createMarketItem(newTokenId, price);
        }
    }

    function createMarketItem(uint256 tokenId, uint256 price) private {
        require(price > 0, "Le prix doit etre d'au moins 1 wei");

        idToMarketItem[tokenId] = MarketItem(
            tokenId,
            payable(address(this)),
            payable(address(this)),
            price,
            false
        );

        _transfer(msg.sender, address(this), tokenId);
        emit MarketItemCreated(
            tokenId,
            address(this),
            address(this),
            price,
            false
        );
    }

    /* Permet la revente d'un token*/
    function resellTicket(uint256 tokenId, uint256 price) public payable {
        require(
            idToMarketItem[tokenId].owner == msg.sender,
            "Seul le proprietaire peut mettre en vente un billet"
        );
        require(
            msg.value >= listingPrice,
            "Le prix doit etre egal ou superieur au prix de mise en vente"
        );
        idToMarketItem[tokenId].sold = false;
        idToMarketItem[tokenId].price = price;
        idToMarketItem[tokenId].seller = payable(msg.sender);
        idToMarketItem[tokenId].owner = payable(address(this));
        _itemsSold.decrement();
        _transfer(msg.sender, address(this), tokenId);
    }

    /* Creates the sale of a marketplace item */
    /* Transfers ownership of the item, as well as funds between parties */
    function buyTicket(
        uint256 tokenId,
        address buyer,
        address organisator
    ) public payable {
        idToMarketItem[tokenId].owner = payable(buyer);
        idToMarketItem[tokenId].sold = true;
        idToMarketItem[tokenId].seller = payable(address(0));
        _itemsSold.increment();
        _transfer(address(this), buyer, tokenId);
        // payable(organisator).transfer(listingPrice);
        payable(organisator).transfer(msg.value);

        // require(
        //     msg.value == price,
        //     "Merci de soummettre le prix demande pour effectuer la vente"
        // );
    }

    /* Returns all unsold market items */
    function fetchMarketItems() public view returns (MarketItem[] memory) {
        uint256 itemCount = _tokenIds.current();
        uint256 unsoldItemCount = _tokenIds.current() - _itemsSold.current();
        uint256 currentIndex = 0;

        MarketItem[] memory items = new MarketItem[](unsoldItemCount);
        for (uint256 i = 0; i < itemCount; i++) {
            if (idToMarketItem[i + 1].owner == address(this)) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    /* Returns only items that a user has purchased */
    function fetchMyNFTs() public view returns (MarketItem[] memory) {
        uint256 totalItemCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idToMarketItem[i + 1].owner == msg.sender) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idToMarketItem[i + 1].owner == msg.sender) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    /* Returns only items a user has listed */
    function fetchItemsListed() public view returns (MarketItem[] memory) {
        uint256 totalItemCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idToMarketItem[i + 1].seller == msg.sender) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idToMarketItem[i + 1].seller == msg.sender) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    // create a function to Check that the ticket belongs to the user's wallet address
    // function checkTicket(uint256 tokenId) public view returns (bool) {
    //     return idToMarketItem[tokenId].owner == msg.sender;
    // } 
    
    // check if ticket exists
    function checkTicketExists(uint256 tokenId) public view returns (bool) {
        return idToMarketItem[tokenId].owner != address(0);
    }

    function isUnique(uint256 tokenId) public view returns (bool) {
        return idToMarketItem[tokenId].owner == address(0);
    }

     
    // function isTokenContract(uint256 tokenId) public view returns (bool) {
    //     return idToMarketItem[tokenId].owner == address(this);
    // }

    //create function to rebuy a token from the market sale contract 
    function rebuyToken(uint256 tokenId) public payable {
        require(
            idToMarketItem[tokenId].owner == address(this),
            "Seul le proprietaire peut re-acheter un billet"
        );
        require(
            idToMarketItem[tokenId].sold == true,
            "Le billet n'est pas en vente"
        );
        require(
            msg.value >= idToMarketItem[tokenId].price,
            "Le prix doit etre egal ou superieur au prix de mise en vente"
        );
        idToMarketItem[tokenId].owner = payable(msg.sender);
        idToMarketItem[tokenId].sold = false;
        idToMarketItem[tokenId].seller = payable(address(0));
        _itemsSold.decrement();
        _transfer(msg.sender, address(this), tokenId);
    }



    

}
