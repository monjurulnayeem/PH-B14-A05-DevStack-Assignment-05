import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="relative mx-auto flex h-14 max-w-[1300px] items-center justify-between px-5 lg:px-0">

        {/* Desktop Logo */}
        <a
          href="#home"
          className="hidden shrink-0 lg:flex"
        >
          <img
            src="/images/logo.png"
            alt="Dev Stack"
            className="h-8 w-auto"
          />
        </a>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() =>
            setIsMenuOpen((previous) => !previous)
          }
          className="flex h-8 w-8 items-center justify-center rounded-md text-lg text-slate-700 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "×" : "☰"}
        </button>

        {/* Mobile Center Logo */}
        <a
          href="#home"
          className="absolute left-1/2 flex -translate-x-1/2 items-center lg:hidden"
        >
          <img
            src="/images/logo.png"
            alt="Dev Stack"
            className="h-8 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[13px] font-medium transition ${
                index === 0
                  ? "text-pink-500"
                  : "text-slate-600 hover:text-pink-500"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Authentication */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="#signin"
            className="text-[13px] font-medium text-slate-600 transition hover:text-pink-500"
          >
            Sign In
          </a>

          <a
            href="#signup"
            className="brand-gradient-bg rounded-full px-5 py-2 text-[13px] font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Authentication */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="#signin"
            className="text-[11px] font-medium text-slate-600"
          >
            Sign In
          </a>

          <a
            href="#signup"
            className="brand-gradient-bg rounded-full px-3.5 py-1.5 text-[11px] font-semibold text-white"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden">
          <div className="mx-auto flex max-w-[1300px] flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-slate-600 transition hover:text-pink-500"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;