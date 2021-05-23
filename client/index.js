//initialize web3 library, connect to Ethereum blockchain
var web3 = new Web3(Web3.givenProvider);

//contract instance
var instance;
var user;
var loggedIn = false;
var contractAddress = "0x4d0a554E468054Cb328b63E879be2ED9eB7fDd9e";

function start() {
  //ask user to interact with the dapp
  window.ethereum.enable().then((accounts) => {
    //get call back
    //after login
    loggedIn = true;
    //contract instance
    instance = new web3.eth.Contract(abi, contractAddress, {
      from: accounts[0],
    });
    //almost always accounts[0]
    user = accounts[0];
    menu();
    console.log("login successful");
  });
}
 
$(document).ready(() => {
  web3.eth.getAccounts((err, accounts) => {
    instance = new web3.eth.Contract(abi, contractAddress, {
      from: accounts[0],
    });
    user = accounts[0];
    if (accounts.length == 0) {
      loggedIn = false;
    } else {
      loggedIn = true;
    }
    menu();
  });
});

//.send is required when state variables are modified
function createDoraemon(dnaStr) {
  console.log(dnaStr);
  instance.methods.createDoraemonGen0(dnaStr).send({}, (error, txHash) => {
    if (error) {
      console.log(error);
    } else {
      console.log(txHash);
      instance.once("Birth", (error, event) => {
        if (error) {
          alert("Error");
        } else {
          console.log(JSON.stringify(event, null, "    "));
          alert(`
            Successfully created Doraemon \n
            owner: ${event.returnValues.owner} \n
            genes: ${event.returnValues.genes} \n
            ID: ${event.returnValues.doraemonId} \n
            mumID: ${event.returnValues.mumId} \n
            dadID: ${event.returnValues.dadId} 
          `);
        }
      });
    }
  });
}

function breedCats(parentId){
  instance.methods.breed(parentId[0], parentId[1]).send({}, (error, txHash) => {
    if (error) {
      console.log(error);
    } else {
      console.log(txHash);
      instance.once("Birth", (error, event) => {
        if (error) {
          alert("Error");
        } else {
          console.log(JSON.stringify(event, null, "    "));
          appendDoraemon(event.returnValues.doraemonId);
        }
      });
    }
  }); 
}

async function myDoraemon(){
  let arrayId = await instance.methods.tokensOfOwner(user).call();
  for(let i=0; i < arrayId.length; i++){
    appendDoraemon(arrayId[i]);
  }
}

async function appendDoraemon(id){
  let doraemon = await instance.methods.getDoraemon(id).call();
  // console.log(doraemon);
  // console.log(id);
  appendCat(doraemon.genes, id, doraemon.generation);
}