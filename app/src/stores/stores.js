import { writable } from "svelte/store";

export const ourPrice = writable(0);
export const calculationMode = writable('dollars');
export const ratesUSDBased = writable([]);