import React from "react";
import Link from "next/link";

const SocialIcon: React.FC<{
  href: string;
  children: React.ReactNode;
  label: string;
}> = ({ href, children, label }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-full glass border border-black/5 dark:border-white/10 hover:border-yellow-600 dark:hover:border-yellow-500 transition-all duration-500 hover:scale-110 group shadow-sm hover:shadow-yellow-600/20"
  >
    <span className="group-hover:text-yellow-600 dark:group-hover:text-yellow-500 transition-colors duration-500 text-gray-400 dark:text-zinc-500">
      {children}
    </span>
  </a>
);

export const Footer: React.FC = () => {
  return (
    <footer className="py-32 px-6 border-t border-black/5 dark:border-white/5 bg-white dark:bg-[#050505] text-gray-900 dark:text-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          {/* Brand Identity Column */}
          <div className="md:col-span-1 space-y-8">
            <h2 className="text-4xl font-serif tracking-tighter">
              Weddingwit.
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-[11px] leading-relaxed uppercase tracking-[0.4em] font-light max-w-xs">
              A bespoke visual boutique for the modern romantic. Archiving the
              soul of connection from our base in Hyderabad to the world's most
              beautiful stages.
            </p>
            <div className="flex flex-wrap gap-4">
              <SocialIcon href="https://instagram.com" label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://youtube.com" label="YouTube">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://wa.me/914045678910" label="WhatsApp">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-14h.8A8.5 8.5 0 0 1 21 11.5Z" />
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 9v6" />
                  <path d="M9 12h6" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://pinterest.com" label="Pinterest">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" x2="12" y1="8" y2="16" />
                  <line x1="8" x2="16" y1="12" y2="12" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Directory Column */}
          <div className="space-y-8">
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-yellow-600 dark:text-yellow-500">
              The Directory
            </h3>
            <nav className="flex flex-col gap-4 text-xs uppercase tracking-[0.5em] font-medium text-gray-400 dark:text-zinc-500">
              <Link
                href="/"
                className="hover:text-yellow-600 dark:hover:text-yellow-500 transition-all duration-300 w-fit hover:translate-x-2"
              >
                The Studio Home
              </Link>
              <Link
                href="/about"
                className="hover:text-yellow-600 dark:hover:text-yellow-500 transition-all duration-300 w-fit hover:translate-x-2"
              >
                Our Philosophy
              </Link>
              <Link
                href="/gallery"
                className="hover:text-yellow-600 dark:hover:text-yellow-500 transition-all duration-300 w-fit hover:translate-x-2"
              >
                The Portfolio
              </Link>
              <Link
                href="/book"
                className="hover:text-yellow-600 dark:hover:text-yellow-500 transition-all duration-300 w-fit hover:translate-x-2"
              >
                Reserve Dates
              </Link>
            </nav>
          </div>

          {/* Location Column */}
          <div className="space-y-8">
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-yellow-600 dark:text-yellow-500">
              Connect
            </h3>
            <div className="space-y-4 text-sm font-serif italic text-gray-500 dark:text-zinc-400">
              <p className="hover:text-yellow-600 transition-colors duration-300 cursor-pointer">
                archives@weddingwit.com
              </p>
              <p className="hover:text-yellow-600 transition-colors duration-300 cursor-pointer">
                +91 (0) 40 4567 8910
              </p>
              <p>Jubilee Hills, Hyderabad</p>
            </div>
          </div>

          {/* Availability Column */}
          <div className="space-y-8 md:text-right">
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-yellow-600 dark:text-yellow-500">
              Archive Status
            </h3>
            <p className="text-base font-serif italic text-gray-500 dark:text-zinc-400 leading-relaxed">
              Accepting exactly 12 commissions{" "}
              <br className="hidden lg:block" /> worldwide for the 2025 season.
            </p>
            <div className="inline-block px-4 py-2 rounded-full border border-yellow-600/20 text-[9px] uppercase tracking-widest text-yellow-600 font-bold">
              Available Globally
            </div>
          </div>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="pt-12 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[9px] text-gray-400 dark:text-zinc-600 uppercase tracking-[0.3em] font-light text-center md:text-left">
            &copy; {new Date().getFullYear()} Weddingwit Artistry Archive. All
            Visual Content Protected.
          </div>
          <div className="flex gap-8 text-[9px] text-gray-400 dark:text-zinc-600 uppercase tracking-[0.3em] font-light">
            <Link href="/privacy-policy" className="hover:text-yellow-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-yellow-600 transition-colors">Terms of Service</Link>
          </div>
          <div className="text-[9px] text-gray-400 dark:text-zinc-600 uppercase tracking-[0.3em] font-light">
            Legacies Crafted Globally. Headquartered in Hyderabad, India.
          </div>
        </div>
      </div>
    </footer>
  );
};
