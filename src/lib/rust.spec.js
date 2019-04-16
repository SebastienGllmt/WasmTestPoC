
import { RustModule } from './rustLoader';

describe('Test WASM loading', () => {
  let rust;
  beforeEach(async () => {
    await RustModule.load();
  });

  it('test address WASM bindings', () => {
    const address = RustModule.Wallet.Address.from_base58('Ae2tdPwUPEZLs4HtbuNey7tK4hTKrwNwYtGqp7bDfCy2WdR3P6735W5Yfpe');
    expect(address.to_base58()).toBe('Ae2tdPwUPEZLs4HtbuNey7tK4hTKrwNwYtGqp7bDfCy2WdR3P6735W5Yfpe');
  });
});


