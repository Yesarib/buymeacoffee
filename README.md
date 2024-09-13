# Buy Me a Coffee DApp

This is a decentralized application (DApp) where users can send donations in the form of cryptocurrency to support the project, similar to the "Buy Me a Coffee" concept.

## Getting Started
Follow these instructions to set up and run the project locally.

# Installation
1. Clone the repository:  
```
git clone https://github.com/Yesarib/buymeacoffee.git
cd buymeacoffee
```
2. Install dependencies:
```
npm install
```
# Running the Smart Contract
1. Compile the smart contract:
  ```
  npx hardhat compile
  ```
2. Deploy the contract to a local network:
  ```
  npx hardhat node
  npx hardhat run scripts/deploy.js --network localhost
  ```
# Running the Frontend
1. Navigate to the frontend folder:
  ```
  cd client
  ```
2. Start the React app:
  ```
  npm run dev
  ```
3. Open the app in your browser at http://localhost:5173.

Note: For real deployment make sure to edit your sepolia testnet information in the hardhat.config.js file.
