"use client";

import React, { useMemo } from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import {
  PhantomWalletAdapter,
} from "@solana/wallet-adapter-phantom";

import {BraveWalletAdapter} from "@solana/wallet-adapter-brave";
import {SolflareWalletAdapter} from "@solana/wallet-adapter-solflare";

export default function SolanaProviders({ children }: { children: React.ReactNode }) {
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
