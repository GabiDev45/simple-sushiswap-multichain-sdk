export enum ChainId {
  MAINNET = 1,
  BSC = 56,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
}

export const ChainNames = new Map<number, string>([
  [ChainId.MAINNET, 'mainnet'],
  [ChainId.BSC, 'bsc'],
  [ChainId.ROPSTEN, 'ropsten'],
  [ChainId.RINKEBY, 'rinkeby'],
  [ChainId.GÖRLI, 'görli'],
  [ChainId.KOVAN, 'kovan'],
]);
