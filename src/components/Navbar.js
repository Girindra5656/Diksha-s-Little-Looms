"use client";

import Link from "next/link";
import { useState } from "react";
import { BRAND, FABRICS, OCCASIONS } from "@/lib/constants";

export default function Navbar({ user }) {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(""); // "fabric" | "occasion" | ""

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ivory/90 backdrop-blur">
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
          {/* By Fabric mega-menu */}
          <div
            className="relative"
            onMouseEnter={() => setMenu("fabric")}
            onMouseLeave={() => setMenu("")}
          >
            <Link href="/collections" className="link-underline py-2">By Fabric</Link>
            {menu === "fabric" && (
              <div className="absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-2">
                <div className="card grid grid-cols-3 gap-2 p-4">
                  {FABRICS.map((f) => (
                    <div key={f.slug}>
                      <Link
                        href={`/collections?fabric=${f.slug}`}
                        className="block rounded-lg px-2 py-1.5 font-display text-base text-wine hover:bg-cream"
                      >
                        {f.name}
                      </Link>
                      <ul className="mt-1 space-y-0.5">
                        {f.weaves.map((w) => (
                          <li key={w.slug}>
                            <Link
                              href={`/collections?fabric=${f.slug}&weave=${w.slug}`}
                              className="block rounded-md px-2 py-1 text-[13px] text-ink/80 hover:bg-cream hover:text-wine"
                            >
                              {w.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* By Occasion menu */}
          <div
            className="relative"
            onMouseEnter={() => setMenu("occasion")}
            onMouseLeave={() => setMenu("")}
          >
            <Link href="/collections" className="link-underline py-2">By Occasion</Link>
            {menu === "occasion" && (
              <div className="absolute left-1/2 top-full w-60 -translate-x-1/2 pt-2">
                <div className="card p-2">
                  {OCCASIONS.map((o) => (
                    <Link
                      key={o.slug}
                      href={`/collections?occasion=${o.slug}`}
                      className="block rounded-lg px-3 py-2 text-ink hover:bg-cream"
                    >
                      {o.name}
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
                <Link href="/admin" className="btn-outline px-4 py-2 text-xs">Admin</Link>
              )}
              <Link href="/account" className="link-underline py-2">
                Hi, {user.name?.split(" ")[0] || "you"}
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/login" className="link-underline py-2">Sign in</Link>
              <Link href="/signup" className="btn-primary px-4 py-2 text-xs">Create account</Link>
            </div>
          )}
        </div>

        {/* mobile toggle */}
        <button
          className="rounded-lg border border-line p-2 md:hidden"
          aria-label="Open menu" aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                  : <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />}
          </svg>
        </button>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-line bg-ivory md:hidden">
          <div className="container-max flex flex-col gap-1 py-4 text-sm">
            {FABRICS.map((f) => (
              <div key={f.slug} className="py-1">
                <Link
                  href={`/collections?fabric=${f.slug}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-1 py-2 font-display text-base text-wine hover:bg-cream"
                >
                  {f.name}
                </Link>
                <div className="flex flex-wrap gap-1.5 px-1 pb-1">
                  {f.weaves.map((w) => (
                    <Link
                      key={w.slug}
                      href={`/collections?fabric=${f.slug}&weave=${w.slug}`}
                      onClick={() => setOpen(false)}
                      className="rounded-full border border-line px-2.5 py-1 text-xs text-ink/80"
                    >
                      {w.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="my-2 h-px bg-line" />
            <p className="eyebrow px-1 pb-1">By occasion</p>
            <div className="flex flex-wrap gap-1.5 px-1">
              {OCCASIONS.map((o) => (
                <Link
                  key={o.slug}
                  href={`/collections?occasion=${o.slug}`}
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-line px-2.5 py-1 text-xs text-ink/80"
                >
                  {o.name}
                </Link>
              ))}
            </div>
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
