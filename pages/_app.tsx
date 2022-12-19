import "../styles/globals.css";
import type { AppProps } from "next/app";
// import { Web3ReactProvider } from '@web3-react/core'
// import Web3 from "web3";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
