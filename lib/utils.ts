import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function downloadCSV(data: Record<string, unknown>[], filename: string) {
  const keys = Object.keys(data[0]);

  const csvBody = data.map((row) => {
    return keys.map((key) => row[key]).join(",");
  });
  const csv = [keys.join(","), ...csvBody].join("\n");

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
}
