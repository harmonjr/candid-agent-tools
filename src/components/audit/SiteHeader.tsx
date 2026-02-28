'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { href: '/audit', label: 'Margin Audit' },
  { href: '/enough', label: 'Enough' },
  { href: '/true-cost', label: 'True Cost' },
  { href: '/expectations', label: 'Expectations' },
  { href: '/board', label: 'Board' },
  { href: '/boundaries', label: 'Boundaries' },
  { href: '/conversations', label: 'Conversations' },
  { href: '/templates', label: 'Templates' },
] as const;

const LINK_CLASS =
  'font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid transition-colors duration-200 hover:text-accent-hover focus:outline-hidden focus:ring-2 focus:ring-accent/20';

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [menuOpen, closeMenu]);

  return (
    <header ref={headerRef} className="border-b border-border bg-cream">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-serif text-xl font-light text-ink transition-colors duration-200 hover:text-candid focus:outline-hidden focus:ring-2 focus:ring-accent/20"
        >
          The Candid Agent
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={LINK_CLASS}>
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex flex-col justify-center gap-[5px] p-2 lg:hidden focus:outline-hidden focus:ring-2 focus:ring-accent/20 transition-colors duration-200"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`block h-[2px] w-5 bg-ink transition-all duration-200 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block h-[2px] w-5 bg-ink transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-[2px] w-5 bg-ink transition-all duration-200 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      <nav
        className={`overflow-hidden border-t border-border bg-cream transition-[max-height] duration-300 ease-out lg:hidden ${menuOpen ? 'max-h-96' : 'max-h-0 border-t-0'}`}
      >
        <div className="mx-auto flex max-w-5xl flex-col px-6 py-2">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMenu} className={`${LINK_CLASS} block py-3`}>
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
