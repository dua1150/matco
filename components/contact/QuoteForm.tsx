"use client";

import { FormEvent, useState } from "react";
import { services } from "@/data/services";
import Button from "@/components/shared/Button";

type FormState = {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
};

const INITIAL_STATE: FormState = {
  name: "",
  phone: "",
  email: "",
  projectType: "",
  budget: "",
  message: "",
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const WHATSAPP_NUMBER = "96897629914";

function buildWhatsAppMessage(form: FormState): string {
  const serviceName =
    services.find((s) => s.slug === form.projectType)?.name ?? form.projectType;

  const lines = [
    "New Quote Request — MATCO Website",
    "",
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    form.email ? `Email: ${form.email}` : null,
    `Project Type: ${serviceName}`,
    form.budget ? `Budget: ${form.budget}` : null,
    "",
    `Message: ${form.message}`,
  ].filter(Boolean);

  return lines.join("\n");
}

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!form.phone.trim()) nextErrors.phone = "Phone number is required.";
    if (!form.projectType) nextErrors.projectType = "Please select a project type.";
    if (!form.message.trim())
      nextErrors.message = "Please tell us a bit about your project.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = buildWhatsAppMessage(form);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 border border-line bg-surface p-8">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Request Ready
        </span>
        <h3 className="text-xl font-semibold text-text-primary sm:text-2xl">
          Thank you, {form.name.split(" ")[0]}.
        </h3>
        <p className="text-sm leading-relaxed text-text-secondary">
          A WhatsApp window should have opened with your project details
          filled in — just press send. If it didn&apos;t open, use the
          button below.
        </p>
        <Button
          type="button"
          variant="primary"
          size="md"
          onClick={() => {
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              buildWhatsAppMessage(form)
            )}`;
            window.open(whatsappUrl, "_blank", "noopener,noreferrer");
          }}
        >
          Open WhatsApp Again
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="md"
          onClick={() => {
            setForm(INITIAL_STATE);
            setSubmitted(false);
          }}
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs uppercase tracking-wider text-text-secondary">
            Name *
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="border border-line bg-surface px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-gold"
          />
          {errors.name && (
            <span id="name-error" className="text-xs text-maroon">
              {errors.name}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-xs uppercase tracking-wider text-text-secondary">
            Phone *
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className="border border-line bg-surface px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-gold"
          />
          {errors.phone && (
            <span id="phone-error" className="text-xs text-maroon">
              {errors.phone}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-xs uppercase tracking-wider text-text-secondary">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="border border-line bg-surface px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-gold"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="projectType" className="text-xs uppercase tracking-wider text-text-secondary">
            Project Type *
          </label>
          <select
            id="projectType"
            value={form.projectType}
            onChange={(e) => handleChange("projectType", e.target.value)}
            aria-invalid={!!errors.projectType}
            aria-describedby={errors.projectType ? "projectType-error" : undefined}
            className="border border-line bg-surface px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-gold"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.name}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <span id="projectType-error" className="text-xs text-maroon">
              {errors.projectType}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="budget" className="text-xs uppercase tracking-wider text-text-secondary">
            Budget
          </label>
          <input
            id="budget"
            type="text"
            value={form.budget}
            onChange={(e) => handleChange("budget", e.target.value)}
            placeholder="Optional"
            className="border border-line bg-surface px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-gold placeholder:text-text-secondary/60"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs uppercase tracking-wider text-text-secondary">
          Message *
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="resize-none border border-line bg-surface px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-gold"
        />
        {errors.message && (
          <span id="message-error" className="text-xs text-maroon">
            {errors.message}
          </span>
        )}
      </div>

      <Button type="submit" variant="primary" size="lg" className="mt-2 w-fit">
        Request a Quote
      </Button>
    </form>
  );
}