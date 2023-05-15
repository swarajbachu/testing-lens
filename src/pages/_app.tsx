import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { LensProvider } from '@lens-protocol/react-web';
import { lensConfig } from '../utils/lensclient';
import { WagmiConfig } from 'wagmi';
import { client } from '../utils/wagmi';

export default function App({ Component, pageProps }: AppProps) {
  return(

    <WagmiConfig client={client}>
    <LensProvider config={lensConfig}   >
    <Component {...pageProps} />
    </LensProvider>
    </ WagmiConfig >

    );
}
