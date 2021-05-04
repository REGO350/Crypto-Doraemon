// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// import "../node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol";
// import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";
// import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol";

import "./IERC721.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract Doracontract is IERC721, Ownable{
  string constant _name = "CryptoDoraemon";
  string constant _symbol = "DORA";
  uint16 public constant CREATION_LIMIT_GEN0 = 10;

  event Birth(
    address owner, 
    uint256 doraemonId, 
    uint256 mumId, 
    uint256 dadId, 
    uint256 genes
  );

  struct Doraemon {
    uint256 genes;
    uint64 birthTime;
    uint32 mumId;
    uint32 dadId;
    uint16 generation;
  }

  //Array with all token ids (index==>token id)
  Doraemon[] private allTokens;
  //Mapping owner address to token count
  mapping (address => uint256) private ownerToBalance;
  //Mapping from token ID to owner address
  mapping (uint256 => address) private tokenToOwner;
  //Counts created gen 0 doraemons
  uint16 public gen0Counter; 

  function createDoraemonGen0(uint256 _genes) public onlyOwner returns(uint256){
    require(gen0Counter < CREATION_LIMIT_GEN0, "Cannot create more gen 0 doraemon");
    gen0Counter++;

    return _createDoraemon(0, 0, 0, _genes, msg.sender);
  }

  function _createDoraemon(
    uint256 _mumId, 
    uint256 _dadId, 
    uint256 _generation, 
    uint256 _genes, 
    address _owner
  ) private returns(uint256) {
    Doraemon memory _doraemon = Doraemon({
      genes: _genes,
      birthTime: uint64(block.timestamp),
      mumId: uint32(_mumId),
      dadId: uint32(_dadId),
      generation: uint16(_generation)
    });
    allTokens.push(_doraemon);
    uint256 newDoraemonId = allTokens.length - 1; 

    emit Birth(_owner, newDoraemonId, _mumId, _dadId, _genes);
    _transfer(address(0), _owner, newDoraemonId);

    return newDoraemonId;
  } 

  function getDoraemon(uint256 _tokenId) external view returns(
    uint256 genes,
    uint64 birthTime,
    uint32 mumId,
    uint32 dadId,
    uint16 generation,
    address owner
  ){
    genes = allTokens[_tokenId].genes;
    birthTime = allTokens[_tokenId].birthTime;
    mumId = allTokens[_tokenId].mumId;
    dadId = allTokens[_tokenId].dadId;
    generation = allTokens[_tokenId].generation;
    owner = tokenToOwner[_tokenId];
  }

  function balanceOf(address _owner) external view override returns(uint256){
    return ownerToBalance[_owner];
  }

  function totalSupply() external view override returns(uint256){
    return allTokens.length;
  }

  function name() external pure override returns (string memory){
    return _name;
  } 

  function symbol() external pure override returns (string memory){
    return _symbol;
  } 

  function ownerOf(uint256 _tokenId) public view override returns(address){
    address owner = tokenToOwner[_tokenId];
    require(owner != address(0), "ERC721: owner query for nonexistent token");
    return owner;
  }

  function transfer(address _to, uint256 _tokenId) public view override{
    require(_to != address(0) && _to != address(this), "ERC721: invalid address");
    require(_to != msg.sender, "ERC721: cannot send to yourselves");
    require(_owns(msg.sender, _tokenId), "ERC721: you are not the owner of this token");
  }

  function _transfer(address _from, address _to, uint256 _tokenId) internal{
    ownerToBalance[_to]++;
    if(_from != address(0)){
      ownerToBalance[_from]--;
    }
    tokenToOwner[_tokenId] = _to;
    emit Transfer(_from, _to, _tokenId);
  }

  function _owns(address _claimant, uint256 _tokenId) internal view returns(bool){
    return tokenToOwner[_tokenId] == _claimant;
  }
}