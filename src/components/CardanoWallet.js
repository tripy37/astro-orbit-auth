import * as CardanoWasm from '@emurgo/cardano-serialization-lib-asmjs';

class CardanoWallet {
  constructor() {
    this.address = null;
  }

  async connect() {
    if (typeof window.cardano === 'undefined') {
      throw new Error('Cardano wallet not found. Please install a Cardano wallet extension.');
    }

    const api = await window.cardano.nami.enable();
    const rawAddress = await api.getUsedAddresses();
    const address = CardanoWasm.Address.from_bytes(Buffer.from(rawAddress[0], 'hex'));
    this.address = address.to_bech32();

    return this.address;
  }

  async getBalance() {
    if (!this.address) {
      throw new Error('Wallet not connected');
    }

    const api = await window.cardano.nami.enable();
    const balance = await api.getBalance();
    return CardanoWasm.Value.from_bytes(Buffer.from(balance, 'hex')).coin().to_str();
  }
}

export default new CardanoWallet();