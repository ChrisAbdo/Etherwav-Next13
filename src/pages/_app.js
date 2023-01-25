import '../styles/globals.css';
import React, { useState } from 'react';

import Navbar from '../components/Navbar';

import { Analytics } from '@vercel/analytics/react';
import { Toaster } from 'react-hot-toast';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import { Poppins } from '@next/font/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LensUserContextProvider from '../context/LensUserContext';
import { useRouter } from 'next/router';

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
});

// Thirdweb Initialization
const desiredChainId = ChainId.Polygon;

// react query setup
const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <main className={poppins.className}>
      <ThirdwebProvider desiredChainId={desiredChainId}>
        <QueryClientProvider client={queryClient}>
          <LensUserContextProvider>
            <Navbar />

            <Component {...pageProps} />
            <Toaster />
            <Analytics />
          </LensUserContextProvider>
        </QueryClientProvider>
      </ThirdwebProvider>
    </main>
  );
}
