function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-[1300px] px-5 py-12 lg:px-0">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center"
            >
              <img
                src="/images/logo.png"
                alt="Dev Stack"
                className="h-9 w-auto"
              />
            </a>

            <p className="mt-4 max-w-[300px] text-xs leading-6 text-slate-400">
              Explore modern development technologies and
              build a stack that fits your next project.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-2">
              <a
                href="#github"
                aria-label="GitHub"
                className="flex h-8 w-16 items-center justify-center rounded-full border border-slate-200 text-xs font-semibold text-slate-500 transition hover:border-slate-300 hover:text-slate-900"
              >
                GitHub
              </a>

              <a
                href="#twitter"
                aria-label="Twitter"
                className="flex h-8 w-16 items-center justify-center rounded-full border border-slate-200 text-xs font-semibold text-slate-500 transition hover:border-slate-300 hover:text-slate-900"
              >
                X
              </a>

              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="flex h-8 w-16 items-center justify-center rounded-full border border-slate-200 text-xs font-semibold text-slate-500 transition hover:border-slate-300 hover:text-slate-900"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-bold text-slate-800">
              Product
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-xs text-slate-400 transition hover:text-slate-700"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#technologies"
                  className="text-xs text-slate-400 transition hover:text-slate-700"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="text-xs text-slate-400 transition hover:text-slate-700"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold text-slate-800">
              Company
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-xs text-slate-400 transition hover:text-slate-700"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-xs text-slate-400 transition hover:text-slate-700"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#careers"
                  className="text-xs text-slate-400 transition hover:text-slate-700"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-bold text-slate-800">
              Legal
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#privacy"
                  className="text-xs text-slate-400 transition hover:text-slate-700"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#terms"
                  className="text-xs text-slate-400 transition hover:text-slate-700"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-slate-100">
        <div className="mx-auto flex max-w-[1300px] flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-0">
          
          <p className="text-[10px] text-slate-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#privacy"
              className="text-[10px] text-slate-400 transition hover:text-slate-700"
            >
              Privacy
            </a>

            <a
              href="#terms"
              className="text-[10px] text-slate-400 transition hover:text-slate-700"
            >
              Terms
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;