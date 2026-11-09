// Shared layout for the buttons: stacked and full width on phones,
// side by side with the same width from the "sm" breakpoint up.
// The filled button is bold and the outline button semibold, so both look
// the same weight (dark text on a light fill looks thinner than light text on dark).
export const buttonRow = "flex w-full flex-col gap-4 sm:flex-row sm:flex-wrap";
const buttonBase = "w-full border text-center sm:w-44";

export const primaryButton = `btn-primary ${buttonBase} border-transparent font-bold`;
export const outlineButton = `btn-outline ${buttonBase} font-semibold`;
