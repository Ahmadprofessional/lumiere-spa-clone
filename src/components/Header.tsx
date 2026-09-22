"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { CloseIcon, MenuIcon } from "@/components/icons";
import type { NavLink } from "@/types/treatment";

const navLinks: Omit<NavLink, "active">[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Treatments", href: "/treatments/" },
  { label: "Contact Us", href: "/contact-us/" },
  { label: "Training", href: "/training/" },
  { label: "Gift Voucher", href: "/gift-voucher/" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="relative w-full bg-background">
      <div className="mx-auto flex max-w-[1345px] items-center justify-center px-6 pt-6 md:justify-center">
        <Link href="/" className="relative h-[70px] w-[280px] md:h-[88px] md:w-[351px]">
          <Image
            src="/images/logo.avif"
            alt="Lumière — Luxury Wellness & Spa"
            fill
            priority
            className="object-contain"
          />
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="absolute right-6 top-8 flex h-[33px] w-[33px] items-center justify-center rounded-[3px] bg-[#D09F47] text-white md:hidden"
        >
          {open ? <CloseIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
        </button>
      </div>

      <nav className="mx-auto hidden max-w-[1345px] justify-center pb-3 pt-3 md:flex">
        <ul className="flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={cn(
                  "relative inline-block px-5 py-[13px] font-heading text-[22px] font-bold text-[#C89A5B]",
                  pathname === link.href &&
                    "after:absolute after:bottom-0 after:left-1/2 after:h-[3px] after:w-[calc(100%-40px)] after:-translate-x-1/2 after:bg-[#C89A5B] after:transition-[width] after:duration-300 after:content-['']"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <nav className="absolute left-0 top-full z-50 w-full bg-white shadow-lg md:hidden">
          <ul>
            {navLinks.map((link) => (
              <li key={link.label} className="border-b border-black/5 last:border-b-0">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-5 py-[13px] font-heading text-[22px] font-bold text-[#C89A5B]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
