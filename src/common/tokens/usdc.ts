import { ChainId } from '../../enums/chain-id';
import { ErrorCodes } from '../errors/error-codes';
import { SushiswapError } from '../errors/sushiswap-error';

/**
 * USDC token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class USDC {
  public static MAINNET() {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      decimals: 18,
      symbol: 'USDC',
      name: 'USD Coin',
    };
  }

  public static BSC() {
    return {
      chainId: ChainId.BSC,
      contractAddress: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
      decimals: 18,
      symbol: 'USDC',
      name: 'USD Coin',
    };
  }

  /**
   * Get USDC token info by chain id
   * @param chainId The chain id
   */
  public static token(chainId: ChainId | number) {
    switch (chainId) {
      case ChainId.MAINNET:
        return this.MAINNET();
      case ChainId.BSC:
        return this.BSC();
      default:
        throw new SushiswapError(
          `${chainId} is not allowed`,
          ErrorCodes.tokenChainIdContractDoesNotExist
        );
    }
  }
}
