"use client";

import React, { useMemo, useState } from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import { SolflareWalletAdapter } from "@solana/wallet-adapter-solflare";
import { BraveWalletAdapter } from "@solana/wallet-adapter-brave";

interface SolanaProvidersProps {
  children: React.ReactNode;
  initialNetwork?: "mainnet-beta" | "devnet";
}

export default function SolanaProviders({ children, initialNetwork = "mainnet-beta" }: SolanaProvidersProps) {
  const [network, setNetwork] = useState(initialNetwork);

  const endpoint =
    network === "mainnet-beta"
      ? "https://solana-mainnet.g.alchemy.com/v2/ocWMbbza8WgJCbjOuxGNv"
      : "https://api.devnet.solana.com";

  const wallets = useMemo(
    () => [new PhantomWalletAdapter(), new SolflareWalletAdapter(), new BraveWalletAdapter()],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        {children}
      </WalletProvider>
    </ConnectionProvider>
  );
}