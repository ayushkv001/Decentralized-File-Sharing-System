# Decentralized File Sharing System

This project facilitates decentralized file sharing on the blockchain using Solidity for the smart contract and React for the front-end interface. It enables users to securely upload files to IPFS (InterPlanetary File System) and share access with specified users through smart contract functionality.


## Features

- **Decentralized Storage:** Images are uploaded to IPFS, ensuring decentralized and immutable storage.
- **Smart Contract:** Utilizes Solidity smart contracts on the Ethereum blockchain for access control and ownership management.
- **Access Control:** Users can grant or revoke access to their uploaded images to specific individuals through the smart contract.

## Technologies Used

- **Solidity:** Smart contract development for ownership and access control.
- **React:** Front-end interface for uploading images and managing access.
- **IPFS:** Decentralized storage protocol for hosting uploaded images.


## How To Start

- **Step 1** Open main folder in terminal   
            **1.1** Run "npm i"
            **1.2** Run "npx hardhat node"
            **1.3** Open another terminal for same folder and run "npx hardhat run --network localhost scripts/deploy.js" 
- **Step 2** Copy the Contract Address and paste it in contractAddress in App.js in Client/src folder
- **Step 3** Open client folder in terminal 
            **1.1** Run "npm i"
            **1.2** Run "npm start"
