class CardanoWallet {
  constructor() {
    this.address = null;
    this.api = null;
  }

  async connect() {
    if (typeof window === 'undefined' || typeof window.cardano === 'undefined') {
      throw new Error('Cardano wallet not found. Please install a Cardano wallet extension (e.g., Nami, Yoroi, or Eternl).');
    }

    // Check for different wallet providers
    const walletProviders = ['nami', 'yoroi', 'eternl'];
    let api;

    for (const provider of walletProviders) {
      if (window.cardano[provider]) {
        try {
          api = await window.cardano[provider].enable();
          this.api = api;
          break;
        } catch (error) {
          console.error(`Failed to connect to ${provider} wallet:`, error);
        }
      }
    }

    if (!this.api) {
      throw new Error('Unable to connect to any Cardano wallet. Please make sure you have a supported wallet extension installed and enabled.');
    }

    try {
      const rawAddresses = await this.api.getUsedAddresses();
      if (rawAddresses.length === 0) {
        throw new Error('No addresses found in the wallet. Please make sure your wallet is set up correctly.');
      }
      this.address = rawAddresses[0]; // Use the first address
      return this.address;
    } catch (error) {
      console.error('Error fetching wallet address:', error);
      throw new Error('Failed to fetch wallet address. Please check your wallet connection and try again.');
    }
  }

  async getBalance() {
    if (!this.address || !this.api) {
      throw new Error('Wallet not connected. Please connect the wallet first.');
    }

    try {
      const balance = await this.api.getBalance();
      return balance.toString(); // Convert to string for display
    } catch (error) {
      console.error('Error fetching wallet balance:', error);
      throw new Error('Failed to fetch wallet balance. Please check your wallet connection and try again.');
    }
  }

  isConnected() {
    return this.address !== null && this.api !== null;
  }
}

export default new CardanoWallet();