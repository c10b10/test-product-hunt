import { spaces, baseSpace } from "./spaces";
import { scaleSpacing } from "./helpers";

export const inputSizes = {
  spacing: spaces.s,
  height: scaleSpacing(baseSpace, 2.375)
};

export const buttonSizes = {
  large: {
    v: spaces.base,
    h: inputSizes.spacing
  },
  medium: {
    v: spaces.s,
    h: spaces.xs
  },
  small: {
    v: spaces.xs,
    h: spaces.xxs
  }
};
