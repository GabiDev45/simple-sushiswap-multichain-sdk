import { ChainId } from '../enums/chain-id';
import { SushiswapPairSettings } from '../factories/pair/models/sushiswap-pair-settings';
import { SushiswapPair } from '../factories/pair/sushiswap-pair';

// WBTC - 0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599
// FUN - 0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b
// REP - 0x1985365e9f78359a9B6AD760e32412f4a445E862
// WETH - 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2
// AAVE - 0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9
// DAI - 0x6B175474E89094C44Da98b954EedeAC495271d0F
// 1INCH - 0x111111111117dC0aa78b770fA6A738034120C302

const routeTestETH = async () => {
  console.log(new Date().getTime());
  const fromTokenContractAddress = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'; //WETH;
  const toTokenContractAddress = '0x98585dFc8d9e7D48F0b1aE47ce33332CF4237D96'; //NEWO
  const ethereumAddress = '0xB1E6079212888f0bE0cf55874B2EB9d7a5e02cD9';

  const sushiswapPair = new SushiswapPair({
    fromTokenContractAddress,
    toTokenContractAddress,
    ethereumAddress,
    chainId: ChainId.MAINNET,
    providerUrl: 'http://localhost:8545',
    routerAddress: '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F',
    pairAddress: '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac',
    settings: new SushiswapPairSettings({
      // if not supplied it use `0.005` which is 0.5%;
      // all figures
      slippage: 0.005,
      // if not supplied it will use 20 a deadline minutes
      deadlineMinutes: 20,
      disableMultihops: false,
    }),
  });

  const sushiswapPairFactory = await sushiswapPair.createFactory();

  // find most optimal router to swap
  const bestRoute = await sushiswapPairFactory.findBestRoute('10');
  console.log(' ---------------- BSC NETWORK Sushiswap / WETH for NEWO -------------');
  console.log(bestRoute.bestRouteQuote.routePathArrayTokenMap);

  await sushiswapPairFactory.trade('10', "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F");
  
};

// const routeTestBSC = async () => {
//   console.log(new Date().getTime());
//   const fromTokenContractAddress = '0xFeea0bDd3D07eb6FE305938878C0caDBFa169042'; //8PAY';
//   const toTokenContractAddress = '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47'; //ADA
//   const ethereumAddress = '0xB1E6079212888f0bE0cf55874B2EB9d7a5e02cD9';

//   const sushiswapPair = new SushiswapPair({
//     fromTokenContractAddress,
//     toTokenContractAddress,
//     ethereumAddress,
//     chainId: ChainId.BSC,
//     routerAddress: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
//     pairAddress: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
//     providerUrl: 'https://bsc.popoo.dev/',
//     settings: new SushiswapPairSettings({
//       // if not supplied it use `0.005` which is 0.5%;
//       // all figures
//       slippage: 0.005,
//       // if not supplied it will use 20 a deadline minutes
//       deadlineMinutes: 20,
//       disableMultihops: false,
//     }),
//   });

//   const sushiswapPairFactory = await sushiswapPair.createFactory();

//   // find most optimal router to swap
//   const bestRoute = await sushiswapPairFactory.findBestRoute('10');
//   console.log(' ---------------- BSC NETWORK Pancakeswap / 8PAY for ADA -------------');
//   console.log(bestRoute.bestRouteQuote.routePathArrayTokenMap);
  
// };

// const routeTestAurora = async () => {
//   console.log(new Date().getTime());
//   const fromTokenContractAddress = '0x8bec47865ade3b172a928df8f990bc7f2a3b9f79'; //AURORA';
//   const toTokenContractAddress = '0x5C92A4A7f59A9484AFD79DbE251AD2380E589783'; //BUSD
//   const ethereumAddress = '0xB1E6079212888f0bE0cf55874B2EB9d7a5e02cD9';

//   const sushiswapPair = new SushiswapPair({
//     fromTokenContractAddress,
//     toTokenContractAddress,
//     ethereumAddress,
//     chainId: ChainId.BSC,
//     routerAddress: '0xA1B1742e9c32C7cAa9726d8204bD5715e3419861',
//     pairAddress: '0xC5E1DaeC2ad401eBEBdd3E32516d90Ab251A3aA3',
//     providerUrl: 'https://mainnet.aurora.dev',
//     settings: new SushiswapPairSettings({
//       // if not supplied it use `0.005` which is 0.5%;
//       // all figures
//       slippage: 0.005,
//       // if not supplied it will use 20 a deadline minutes
//       deadlineMinutes: 20,
//       disableMultihops: false,
//     }),
//   });

routeTestETH();
// routeTestBSC();
