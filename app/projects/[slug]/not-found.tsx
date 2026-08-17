import Button from "@/components/shared/Button";

export default function ProjectNotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-6 bg-bg-primary px-6 pt-20 text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
        404
      </span>
      <h1 className="text-3xl font-semibold text-text-primary sm:text-4xl">
        Project Not Found
      </h1>
      <p className="max-w-md text-text-secondary">
        The project you&apos;re looking for doesn&apos;t exist or may have
        been moved.
      </p>
      <Button href="/projects" variant="primary" size="md">
        View All Projects
      </Button>
    </section>
  );
}