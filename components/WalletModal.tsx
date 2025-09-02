"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { Connection, clusterApiUrl } from "@solana/web3.js";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

interface WalletModalProps {
  onClose: () => void;
}

export default function WalletModal({ onClose }: WalletModalProps) {
  const { connected, connect, disconnect, publicKey } = useWallet();
  const [balance, setBalance] = useState<number | null>(null);
  const [network, setNetwork] = useState<"mainnet-beta" | "devnet">("mainnet-beta");

  const endpoint = network === "mainnet-beta"
    ? "https://solana-mainnet.g.alchemy.com/v2/ocWMbbza8WgJCbjOuxGNv"
    : clusterApiUrl("devnet");

  useEffect(() => {
    if (!publicKey) return;
    const conn = new Connection(endpoint, "confirmed");
    conn.getBalance(publicKey).then(l => setBalance(l / 1e9)).catch(console.error);
  }, [publicKey, endpoint]);

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Account</DialogTitle>
          <DialogClose />
        </DialogHeader>

        {!connected ? (
          <Button
            onClick={connect}
            className="bg-pink-500 hover:bg-pink-600 text-white"
          >
            Connect Wallet
          </Button>
        ) : (
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
                  <Button className="">{network}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setNetwork("mainnet-beta")}>Mainnet</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setNetwork("devnet")}>Devnet</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Disconnect */}
            <Button
              onClick={() => { disconnect(); onClose(); }}
              className="bg-red-500 hover:bg-red-600 text-white "
            >
              Disconnect
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}