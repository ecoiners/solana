"use client";

import { useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Connection, clusterApiUrl } from "@solana/web3.js";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

export function WalletConnect() {
  const { connected, connect, disconnect, publicKey } = useWallet();
  const [modalOpen, setModalOpen] = useState(false);
  const [balance, setBalance] = useState<number | null>(null);
  const [network, setNetwork] = useState<"mainnet-beta" | "devnet">("mainnet-beta");

  const endpoint = network === "mainnet-beta"
    ? "https://solana-mainnet.g.alchemy.com/v2/ocWMbbza8WgJCbjOuxGNv"
    : clusterApiUrl("devnet");

  // fetch balance
  useEffect(() => {
    if (!connected || !publicKey) return;
    const conn = new Connection(endpoint, "confirmed");
    conn.getBalance(publicKey)
      .then(l => setBalance(l / 1e9))
      .catch(console.error);
  }, [connected, publicKey, endpoint]);

  // Auto close modal if disconnected
  useEffect(() => {
    if (!connected) setModalOpen(false);
  }, [connected]);

  // Handle click: connect first, then modal
  const handleClick = async () => {
    if (!connected) {
      try {
        await connect(); // panggil langsung di onclick
      } catch (err) {
        console.error(err);
      }
    } else {
      setModalOpen(true);
    }
  };

  return (
    <>
      <Button
        className="bg-pink-500 hover:bg-pink-600 text-white"
        onClick={handleClick}
      >
        {connected
          ? publicKey?.toBase58().slice(0, 4) + "..." + publicKey?.toBase58().slice(-4)
          : "Connect Wallet"}
      </Button>

      {modalOpen && connected && (
        <Dialog open={true} onOpenChange={() => setModalOpen(false)}>
          <DialogContent className="sm:max-w-sm">
            <DialogHeader>
              <DialogTitle>Wallet Account</DialogTitle>
              <DialogClose />
            </DialogHeader>

            <div className="flex flex-col gap-4 mt-4">
              {/* Address */}
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-muted-foreground">Address</span>
                <Input readOnly value={publicKey?.toBase58() || ""} className="text-sm" />
                <Button size="sm" onClick={() => navigator.clipboard.writeText(publicKey!.toBase58())}>
                  Copy Address
                </Button>
              </div>

              {/* Balance */}
              <div>
                <span className="text-sm font-medium text-muted-foreground">SOL Balance</span>
                <div>{balance !== null ? balance.toFixed(3) + " SOL" : "Loading..."}</div>
              </div>

              {/* Switch Network */}
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-muted-foreground">Network</span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="w-full">{network}</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setNetwork("mainnet-beta")}>Mainnet</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setNetwork("devnet")}>Devnet</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Disconnect */}
              <Button
                onClick={() => disconnect()}
                className="bg-red-500 hover:bg-red-600 text-white"
              >
                Disconnect
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
