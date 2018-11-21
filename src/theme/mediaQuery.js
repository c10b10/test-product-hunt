// @flow
import { css } from "styled-components";

export const breakpoints = {
  untilS: "(max-width: 26.9375em)", // 431px
  s: "(min-width: 27em)", // 432px
  untilM: "(max-width: 38.9375em)", // 623px
  m: "(min-width: 39em)", // 624px
  untilL: "(max-width: 51.9375em)", // 831px
  l: "(min-width: 52em)", // 832px
  untilW: "(max-width: 63.9375em)", // 1023px
  w: "(min-width: 64em)" // 1024px
};

export const mediaQuery = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (cssRules: any) => css`
    @media ${breakpoints[label]} {
      ${css(cssRules)};
    }
  `;
  return acc;
}, {});
