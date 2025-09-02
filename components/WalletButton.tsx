"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import WalletModal from "./WalletModal";
import { useWallet } from "@solana/wallet-adapter-react";

export function WalletButton() {
  const [modalOpen, setModalOpen] = useState(false);
  const { connected, publicKey } = useWallet();

  return (
    <>
      <Button
        className="bg-pink-500 hover:bg-pink-600 text-white"
        onClick={() => setModalOpen(true)}
      >
        {connected
          ? publicKey?.toBase58().slice(0, 4) + "..." + publicKey?.toBase58().slice(-4)
          : "Connect Wallet"}
      </Button>

      {modalOpen && <WalletModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
