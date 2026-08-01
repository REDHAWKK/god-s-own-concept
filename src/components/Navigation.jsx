import { useState } from "react";

const Arrow = () => (
  <svg
    className="text-white w-4 h-4"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 10h13" />
    <path d="M11 4l6 6-6 6" />
  </svg>
);

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#work" },
];

export default function Navigation({ scrolled }) {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  return (
    <nav
      className={`
      fixed left-1/2 top-5 z-50
      -translate-x-1/2
      transition-all duration-300
      ${scrolled ? "scale-[.98]" : ""}
    `}
    >
      {/* Desktop */}
      <div
        className="
        hidden md:flex
        items-center
        gap-8
        rounded-2xl
        border border-white/50
        bg-white/85
        backdrop-blur-xl
        shadow-lg
        px-5
        py-3
      "
      >
        <a
          href="#home"
          className="flex items-center gap-3 pr-6 border-r border-neutral-200"
        >
          <img
            src="/nav-logo.png"
            className="w-9 h-9 object-contain"
            alt=""
          />

          <div className="leading-[0.9]">
            <div className="text-[14px] font-semibold">God's Own</div>

            <div
              className="italic text-[17px]"
              style={{ fontFamily: "Instrument Serif" }}
            >
              Concept
            </div>
          </div>
        </a>

        <div className="flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-600 hover:text-black transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="
          ml-2
          flex items-center gap-2
          rounded-xl
          bg-[#17121b]
          px-5
          py-3
          text-sm
          font-semibold
          text-white
          transition
          hover:scale-105
        "
        >
        <span className="text-white">Let's talk</span>
        <Arrow />
        </a>
      </div>

      {/* Mobile */}

      <div className="md:hidden relative">
        <div
          className="
          flex
          items-center
          justify-between
          w-[92vw]
          max-w-[420px]
          rounded-2xl
          border
          border-white/60
          bg-white/90
          backdrop-blur-xl
          px-4
          py-3
          shadow-lg
        "
        >
          <a
            href="#home"
            onClick={close}
            className="flex items-center gap-3"
          >
            <img
              src="/nav-logo.png"
              className="w-8 h-8 object-contain"
              alt=""
            />

            <div className="leading-[0.85]">
              <div className="text-xs font-semibold">God's Own</div>

              <div
                className="italic text-sm"
                style={{ fontFamily: "Instrument Serif" }}
              >
                Concept
              </div>
            </div>
          </a>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`menu-button ${isOpen ? 'is-open' : ''}`}
            aria-label="Toggle mobile navigation"
          >
            <span />
            <span />
          </button>
        </div>

        {isOpen && (
          <>
            <button
              type="button"
              className="mobile-backdrop open"
              onClick={close}
              aria-label="Close mobile navigation"
            />
            <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="block rounded-xl px-4 py-3 hover:bg-neutral-100 transition"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={close}
                className="nav-cta"
              >
                <span>Let's talk</span>
                <Arrow />
              </a>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}