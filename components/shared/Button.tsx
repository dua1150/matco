import Link from "next/link";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";
type ButtonTone = "default" | "inverse";

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  tone?: ButtonTone;
  children: ReactNode;
  className?: string;
};

type LinkButtonProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

type NativeButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
    href?: undefined;
    type?: "button" | "submit";
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const base =
  "inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-300 whitespace-nowrap";

function getVariantClasses(variant: ButtonVariant, tone: ButtonTone): string {
  if (variant === "primary") {
    return "bg-maroon text-inverse hover:bg-maroon-hover";
  }
  if (variant === "secondary") {
    return tone === "inverse"
      ? "border border-inverse/40 text-inverse hover:border-gold hover:text-gold"
      : "border border-line text-text-primary hover:border-gold hover:text-gold";
  }
  return tone === "inverse"
    ? "text-inverse hover:text-gold underline-offset-4 hover:underline"
    : "text-text-primary hover:text-gold underline-offset-4 hover:underline";
}

const sizes: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-sm",
  lg: "px-9 py-4 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  tone = "default",
  children,
  className = "",
  href,
  ...props
}: ButtonProps) {
  const classes = `${base} ${getVariantClasses(variant, tone)} ${
    variant !== "ghost" ? sizes[size] : ""
  } ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}