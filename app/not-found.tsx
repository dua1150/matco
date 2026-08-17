import Image from "next/image";
import Button from "@/components/shared/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center gap-6 overflow-hidden bg-bg-primary px-6 pt-20 text-center">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/matco-hero.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-bg-primary/85" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6">
        <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          <span className="h-px w-8 bg-gold" />
          404
        </span>
        <h1 className="text-3xl font-semibold text-text-primary sm:text-4xl lg:text-5xl">
          This Page Doesn&apos;t Exist.
        </h1>
        <p className="max-w-md text-base leading-relaxed text-text-secondary">
          The page you&apos;re looking for may have been moved or no longer
          exists. Let&apos;s get you back on track.
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-4">
          <Button href="/" variant="primary" size="md">
            Back to Home
          </Button>
          <Button href="/projects" variant="secondary" size="md">
            View Projects
          </Button>
        </div>
      </div>
    </section>
  );
}