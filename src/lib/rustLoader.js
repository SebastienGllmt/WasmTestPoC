// @flow

// Code copied from Yoroi-Frontend but with types removed

class Module {
  _cardanoWallet;

  async load() {
    this._cardanoWallet = await import('cardano-wallet-browser');  // eslint-disable-line
  }

  get Wallet() {
    return this._cardanoWallet;
  }
}

export const RustModule = new Module();
