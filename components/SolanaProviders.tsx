"use client";

import React, { useMemo } from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  BraveWalletAdapter,
} from "@solana/wallet-adapter-wallets";

import "@solana/wallet-adapter-react-ui/styles.css";

export dsfault function SolanaProviders({ children }: { children: React.ReactNode }) {
  const cluster = (process.env.NEXT_PUBLIC_SOLANA_CLUSTER as string) || "mainnet-beta";

  const endpoint =
    cluster === "mainnet-beta"
      ? "https://solana-mainnet.g.alchemy.com/v2/ocWMbbza8WgJCbjOuxGNv"
      : clusterApiUrl("devnet");

  const wallets = useMemo(
    () => [new PhantomWalletAdapter(), new SolflareWalletAdapter(), new BraveWalletAdapter()],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

