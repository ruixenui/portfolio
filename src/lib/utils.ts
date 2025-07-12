import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: offsetTop - 20, // Adding a small offset for better visibility
      behavior: "smooth"
    });
  }
}
