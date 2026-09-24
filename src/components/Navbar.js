"use client";

import Link from "next/link";
import { useState } from "react";
import { BRAND, CATEGORIES } from "@/lib/constants";

export default function Navbar({ user }) {
  const [open, setOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ivory/90 backdrop-blur">
      {/* announcement strip */}
      <div className="bg-wine text-ivory">
        <div className="container-max flex items-center justify-center py-1.5 text-center text-xs tracking-wide">
          Free shipping across India · All orders prepaid · Order on WhatsApp {BRAND.phoneDisplay}
        </div>
      </div>

      <nav className="container-max flex items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <img src="/logo.svg" alt="" className="h-9 w-9" />
          <span className="font-display text-xl leading-none text-wine sm:text-2xl">
            {BRAND.name}
          </span>
        </Link>

        {/* desktop nav */}
        <div className="hidden items-center gap-7 text-sm md:flex">
          <div
            className="relative"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <Link href="/collections" className="link-underline py-2">
              Shop Sarees
            </Link>
            {shopOpen && (
              <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-2">
                <div className="card overflow-hidden p-2">
                  {CATEGORIES.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/collections?category=${c.slug}`}
                      className="block rounded-lg px-3 py-2 text-ink hover:bg-cream"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link href="/about" className="link-underline py-2">About</Link>
          <Link href="/contact" className="link-underline py-2">Contact</Link>

          {user ? (
            <div className="flex items-center gap-4">
              {user.role === "admin" && (
                <Link href="/admin" className="btn-outline px-4 py-2 text-xs">
                  Admin
                </Link>
              )}
              <Link href="/account" className="link-underline py-2">
                Hi, {user.name?.split(" ")[0] || "you"}
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/login" className="link-underline py-2">Sign in</Link>
              <Link href="/signup" className="btn-primary px-4 py-2 text-xs">
                Create account
              </Link>
            </div>
          )}
        </div>

        {/* mobile toggle */}
        <button
          className="rounded-lg border border-line p-2 md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="border-t border-line bg-ivory md:hidden">
          <div className="container-max flex flex-col gap-1 py-4 text-sm">
            <p className="eyebrow px-1 pb-1">Shop sarees</p>
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                href={`/collections?category=${c.slug}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-1 py-2 hover:bg-cream"
              >
                {c.name}
              </Link>
            ))}
            <div className="my-2 h-px bg-line" />
            <Link href="/collections" onClick={() => setOpen(false)} className="rounded-lg px-1 py-2 hover:bg-cream">All sarees</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="rounded-lg px-1 py-2 hover:bg-cream">About</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="rounded-lg px-1 py-2 hover:bg-cream">Contact</Link>
            <div className="my-2 h-px bg-line" />
            {user ? (
              <>
                {user.role === "admin" && (
                  <Link href="/admin" onClick={() => setOpen(false)} className="rounded-lg px-1 py-2 hover:bg-cream">Admin dashboard</Link>
                )}
                <Link href="/account" onClick={() => setOpen(false)} className="rounded-lg px-1 py-2 hover:bg-cream">My account</Link>
              </>
            ) : (
              <>
                <Link href="/login" onClick={() => setOpen(false)} className="rounded-lg px-1 py-2 hover:bg-cream">Sign in</Link>
                <Link href="/signup" onClick={() => setOpen(false)} className="btn-primary mt-1 justify-center">Create account</Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
