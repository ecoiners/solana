"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Menu } from "lucide-react";
import { WalletButton } from "./wallet-button";

export default function Headers() {
  const pathname = usePathname();

  const nav = [
    { href: "/", label: "Home" },
    { href: "/tools", label: "Tools" },
    { href: "/features", label: "Features" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Left: Logo + Brand */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8 overflow-hidden rounded-xl">
            <Image
              src="/logo.png"
              alt="Darlux Logo"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-lg font-bold">Darlux</span>
        </Link>

        {/* --- Desktop Navigation --- */}
        <nav className="hidden md:flex items-center gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-xl px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                pathname === item.href
                  ? "bg-pink-500 text-white"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* --- Desktop Wallet --- */}
        <div className="hidden md:block">
          <WalletButton />
        </div>

        {/* --- Mobile: Wallet + Menu --- */}
        <div className="flex items-center gap-2 md:hidden">
          <WalletButton />

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" >
                <Menu />
                <span className="sr-only">Open Menu</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent side="bottom" className="flex flex-col gap-2 w-40">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                    pathname === item.href
                      ? "bg-pink-500 text-white"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}