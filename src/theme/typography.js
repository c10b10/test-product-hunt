import { scaleSpacing } from "./helpers";
import { baseSpace } from "./spaces";

export const fontFamily = {
  base: "'Brandon', sans-serif"
};

export const fontSizes = {
  base: baseSpace,
  small: scaleSpacing(baseSpace, 0.875), // 14
  card: scaleSpacing(baseSpace, 1.15), // 18.4
  h1: scaleSpacing(baseSpace, 1.75), // 28
  h2: scaleSpacing(baseSpace, 1.5), // 24
  h3: scaleSpacing(baseSpace, 1.25), // 20
  h4: scaleSpacing(baseSpace, 1.125), // 18
  h5: scaleSpacing(baseSpace, 1), // 16
  h6: scaleSpacing(baseSpace, 0.875) // 14
};

export const lineHeights = {
  base: 1.5,
  headings: 1.3,
  inputs: 1.25
};
