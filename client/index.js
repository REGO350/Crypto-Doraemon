//initialize web3 library, connect to Ethereum blockchain
var web3 = new Web3(Web3.givenProvider);

//contract instance
var instance;
var user;
var contractAddress = "0x67A44d76Ef018047CC778773bf6AA550e3040f99";

//after page loads
$(document).ready(()=>{
  window.ethereum.enable().then((accounts)=>{ //after login
    //contract instance
    instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]}); 
    //almost always accounts[0]
    user = accounts[0]; 

    console.log(instance);
  })
})

//.send is required when state variables are modified
function createKitty(){
  dnaStr = getDna();
  console.log(dnaStr);
  instance.methods.createDoraemonGen0(dnaStr).send({}, (error, txHash)=>{
    if(error){
      console.log(error);
    }else{
      console.log(txHash);
      instance.once('Birth', (error, event) => {
        if(error){
          alert("Error");
        }else{
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
