const { Web3 } = require("web3"); // Correctly import Web3

// Connect to Ethereum mainnet via Infura
const web3 = new Web3("https://mainnet.infura.io/v3/22675c51e1cd46778d669f3e6bf2a9bb");

// Contract address and ABI for a public contract (USDT Contract)
const contractAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7"; // USDT Contract
const contractABI = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

// Create a contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Fetch contract data function
const getContractName = async (req, res) => {
  try {
    console.log('antt');
    
    const name = await contract.methods.name().call();
    console.log(`Contract Name: ${name}`); // Log result to console
    res.send(`Smart contract name fetched and logged in console: ${name}`);
  } catch (error) {
    console.error("Error fetching contract data:", error);
    res.status(500).send("Error fetching contract data");
  }
};

module.exports = { getContractName };
