'use client'

import { Client, configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public'
const { provider, webSocketProvider } = configureChains([polygon, mainnet], [publicProvider()]);


 export  const client = createClient({
    autoConnect: true,
    provider,
    webSocketProvider,
  });
