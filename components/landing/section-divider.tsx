import { cn } from "@/lib/utils";

type SectionDividerProps = {
  variant?: "light" | "dark" | "brand";
};

export function SectionDivider({ variant = "light" }: SectionDividerProps) {
  return (
    <div
      className={cn(
        "h-px w-full",
        variant === "light" && "bg-brand-dark/10",
        variant === "dark" && "bg-white/10",
        variant === "brand" && "bg-brand-light/30"
      )}
    />
  );
}
