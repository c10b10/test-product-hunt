import { scaleSpacing } from "./helpers";

export const baseSpace = "1rem";

export const spaces = {
  none: 0,
  xxs: scaleSpacing(baseSpace, 0.15),
  xs: scaleSpacing(baseSpace, 0.25),
  s: scaleSpacing(baseSpace, 0.5),
  base: scaleSpacing(baseSpace, 1),
  m: scaleSpacing(baseSpace, 1.5),
  l: scaleSpacing(baseSpace, 2),
  xl: scaleSpacing(baseSpace, 3),
  xxl: scaleSpacing(baseSpace, 4),
  xxxl: scaleSpacing(baseSpace, 8)
};

export const defaultSpace = spaces.m;
