import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and merges them with tailwind-merge.
 * Accepts multiple arguments of conditional or string values.
*/
export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
};
