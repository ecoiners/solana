"use client";

import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { Button } from "@/components/ui/button";

export function WalletButton() {
  const { setVisible } = useWalletModal();
  const { connected, disconnect } = useWallet();

  return connected ? (
    <Button
      onClick={disconnect}
      className="rounded-lg bg-red-500 hover:bg-red-600 text-white"
    >
      Disconnect
    </Button>
  ) : (
    <Button
      onClick={() => setVisible(true)}
      className="rounded-lg bg-pink-500 hover:bg-pink-600 text-white"
    >
      Connect Wallet
    </Button>
  );
}