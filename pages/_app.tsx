import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";

import {
  apiProvider,
  configureChains,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { chain, createClient, WagmiProvider } from "wagmi";

const bscTestnet = {
  id: 97,
  name: "BSC Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Binance Smart Chain",
    symbol: "BNB",
  },
  rpcUrls: {
    default: "https://data-seed-prebsc-1-s1.binance.org:8545/",
  },
  blockExplorers: {
    default: { name: "bscscan", url: "https://testnet.bscscan.com/" },
  },
  testnet: true,
};

const { chains, provider } = configureChains(
  [bscTestnet as any],
  [
    apiProvider.jsonRpc((bscTestnet) => ({
      rpcUrl: bscTestnet.rpcUrls.default,
    })),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiProvider>
  );
}
export default MyApp;
