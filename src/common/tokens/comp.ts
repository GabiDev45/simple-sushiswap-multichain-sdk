import { ChainId } from '../../enums/chain-id';
import { ErrorCodes } from '../errors/error-codes';
import { SushiswapError } from '../errors/sushiswap-error';

/**
 * COMP token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class COMP {
  public static MAINNET() {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
      decimals: 18,
      symbol: 'COMP',
      name: 'Compound',
    };
  }

  public static BSC() {
    return {
      chainId: ChainId.BSC,
      contractAddress: '0x52CE071Bd9b1C4B00A0b92D298c512478CaD67e8',
      decimals: 18,
      symbol: 'COMP',
      name: 'Compound',
    };
  }

  /**
   * Get COMP token info by chain id
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
