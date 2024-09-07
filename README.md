# Astro Cardano OrbitDB Project

This project demonstrates the integration of Astro, Cardano blockchain, and OrbitDB to create a decentralized application. It provides a simple interface for connecting a Cardano wallet and interacting with a decentralized database using OrbitDB.

## Features

- Astro-based static site generation
- Cardano wallet integration
- OrbitDB for decentralized data storage
- Simple key-value pair storage and retrieval

## Prerequisites

- Node.js (v14 or later recommended)
- npm (comes with Node.js)
- A Cardano wallet browser extension (e.g., Nami)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd astro-orbit-auth
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Running the Project

1. Start the development server:
   ```
   npm run dev
   ```

2. Open a web browser and navigate to `http://localhost:4321`

## Project Structure

- `src/components/CardanoWallet.js`: Handles Cardano wallet integration
- `src/components/OrbitDB.js`: Manages OrbitDB operations
- `src/pages/index.astro`: Main page with wallet connection and OrbitDB demo
- `src/layouts/Layout.astro`: Layout component for consistent styling

## Usage

1. Connect Cardano Wallet:
   - Click the "Connect Cardano Wallet" button
   - Approve the connection in your Cardano wallet extension

2. OrbitDB Demo:
   - Enter a key and value in the input fields
   - Click "Add Item" to store the key-value pair
   - Click "Get All Items" to retrieve and display all stored items

## Technologies Used

- [Astro](https://astro.build/): Modern static site generator
- [Cardano](https://cardano.org/): Blockchain platform
- [OrbitDB](https://orbitdb.org/): Peer-to-peer database for the decentralized web
- [IPFS](https://ipfs.io/): Distributed file system, used by OrbitDB

## Notes

- This project is a demonstration and may require further development for production use.
- Ensure you have a Cardano wallet extension installed in your browser for full functionality.
- You may see console warnings related to IPFS, which are generally not critical for basic functionality.

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check [issues page](https://github.com/yourusername/astro-orbit-auth/issues) if you want to contribute.

## License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.
