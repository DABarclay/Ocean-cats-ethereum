import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Head>
        <title>OceanCats Mint Page</title>
        <link rel="shortcut icon" href="./oceancatslogo.png"/> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Mint your OceanCats NFTs here"
        />
        <meta
          name="keywords"
          content="OceanCats, NFT, WEB3 series"
        />
      </Head>
      <Component {...pageProps} />

    </ThirdwebProvider>
  );
}

export default MyApp;
