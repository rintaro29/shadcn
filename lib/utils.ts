//shadcn 第一引数に記述した class がコンフリクトした場合は後に指定した class で上書き

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
