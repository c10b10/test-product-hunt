import { colors } from "./colors";
import { spaces, defaultSpace } from "./spaces";
import { breakpoints, mediaQuery } from "./mediaQuery";
import { zIndex } from "./zIndex";
import { fontFamily, fontSizes, lineHeights } from "./typography";
import { buttonSizes } from "./forms";

const theme = {
  colors,
  spaces,
  breakpoints,
  zIndex,
  fontSizes,
  fontFamily,
  lineHeights,
  defaultSpace,
  buttonSizes,

  gutter: spaces.xl,

  border: `1px solid ${colors.border}`,
  borderRadius: {
    base: spaces.s, // 8px
    small: spaces.xs // 4px
  },

  mainMaxWidth: "64rem"
};

export { theme, mediaQuery };
