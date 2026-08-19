import Link from "next/link";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

const SERVICES = [
  "Interior & Exterior",
  "Building Construction",
  "Carpentry",
  "Aluminium & UPVC",
  "Steel & Fabrication",
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg-secondary">
      <div className="container-app grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="flex flex-col gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/matco-logo.png"
            alt="MATCO"
            loading="lazy"
            className="h-auto w-full max-w-[200px] object-contain"
          />
          <p className="max-w-sm text-sm leading-relaxed text-text-secondary">
            MATCO delivers premium construction, interior, carpentry, aluminium
            &amp; UPVC, and steel fabrication solutions built on quality and
            craftsmanship — proudly serving the Sultanate of Oman.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Services
          </h3>
          <ul className="flex flex-col gap-3">
            {SERVICES.map((service) => (
              <li key={service}>
                <Link
                  href="/services"
                  className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Contact
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-text-secondary">
            <li>
              <a href="tel:+96897629914" className="transition-colors hover:text-text-primary">
                +968 9762 9914
              </a>
            </li>
            <li>
              <a href="tel:+96871714825" className="transition-colors hover:text-text-primary">
                +968 7171 4825
              </a>
            </li>
            <li>
              
               <a href="mailto:Matco.oman1@gmail.com"
                className="transition-colors hover:text-text-primary"
              >
                Matco.oman1@gmail.com
              </a>
            </li>
            <li>Auqadh Industrial Area, Salalah, Sultanate of Oman</li>
            <li>Sat – Thu: 8:00 AM – 1:00 PM &amp; 3:00 PM – 8:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-app flex flex-col items-center justify-between gap-4 py-6 text-xs text-text-secondary sm:flex-row">
          <p>© {new Date().getFullYear()} MATCO Construction. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-text-primary">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}