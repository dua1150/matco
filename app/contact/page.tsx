import type { Metadata } from "next";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedReveal from "@/components/shared/AnimatedReveal";
import QuoteForm from "@/components/contact/QuoteForm";

export const metadata: Metadata = {
  title: "Contact MATCO",
  description:
    "Get in touch with MATCO Construction & Architectural Solutions in Sanaiya, Sultanate of Oman, to discuss your construction, interior, carpentry, aluminium & UPVC, or steel fabrication project.",
};

export default function ContactPage() {
  return (
    <section className="bg-bg-primary pb-24 pt-40">
      <div className="container-app">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Get in Touch"
            heading="Let's Talk About Your Project."
            description="Share a few details and we'll get back to you about your construction, interior, carpentry, aluminium & UPVC, or steel fabrication project."
          />
        </AnimatedReveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <AnimatedReveal delay={0.1}>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4 border border-line bg-surface p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  MATCO Construction &amp; Architectural Solutions
                </span>
                <ul className="flex flex-col gap-3 text-sm text-text-secondary">
                  <li>
                    
                     <a href="tel:+96897629914"
                      className="transition-colors hover:text-text-primary"
                    >
                      Phone: +968 9762 9914
                    </a>
                  </li>
                  <li>
                    
                     <a href="tel:+96871714825"
                      className="transition-colors hover:text-text-primary"
                    >
                      Phone: +968 7171 4825
                    </a>
                  </li>
                  <li>
                    
                     <a href="mailto:Matco.oman1@gmail.com"
                      className="transition-colors hover:text-text-primary"
                    >
                      Email: Matco.oman1@gmail.com
                    </a>
                  </li>
                  <li>Location: Sanaiya, Sultanate of Oman</li>
                  <li>Hours: Mon – Sat, 9:00 AM – 6:00 PM</li>
                </ul>
              </div>

              <div className="overflow-hidden border border-line">
                <iframe
                  title="MATCO location — Sanaiya, Sultanate of Oman"
                  src="https://www.google.com/maps?q=Sanaiya,+Sultanate+of+Oman&output=embed"
                  width="100%"
                  height="280"
                  style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(0.85)" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.2}>
            <div className="border border-line bg-surface p-6 sm:p-8">
              <QuoteForm />
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}