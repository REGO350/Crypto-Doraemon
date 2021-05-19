//initialize web3 library, connect to Ethereum blockchain
var web3 = new Web3(Web3.givenProvider);

//contract instance
var instance;
var user;
var loggedIn = false;
var contractAddress = "0x03e5bF2b7c66f416d307631f8BcdCF3593DBF6dC";

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
  });
}

$(document).ready(() => {
  web3.eth.getAccounts(function (err, accounts) {
    if (accounts.length == 0) {
      loggedIn = false;
    } else {
      loggedIn = true;
    }
    menu();
  });
});

//.send is required when state variables are modified
function createKitty() {
  dnaStr = getDna();
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
