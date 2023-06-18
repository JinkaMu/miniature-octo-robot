// Import web3 library

const Web3 = require('web3');

// Connect to an Ethereum network

const web3 = new Web3('https://mainnet.infura.io/v3/your-infura-api-key');

// Ethereum address to retrieve balance for

const address = '0xYourEthereumAddress';

// Retrieve balance

web3.eth.getBalance(address)

  .then(balance => {

    // Convert balance from Wei to Ether

    const etherBalance = web3.utils.fromWei(balance, 'ether');

    console.log(`Balance of ${address}: ${etherBalance} ETH`);

  })

  .catch(error => {

    console.error('Error:', error);

  });

