import { createGlobalStyle } from "styled-components";

import { theme } from ".";

const resets = `
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  blockquote,
  p,
  pre,
  dl,
  dd,
  ol,
  ul,
  figure,
  hr,
  fieldset,
  legend {
    margin: 0;
    padding: 0;
  }

  li > {
    ol,
    ul {
      margin-bottom: 0;
    }
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${resets}
  
  html {
    box-sizing: border-box;
    font-family: ${theme.fontFamily.base};
    font-size: ${theme.fontSizes.base};
    line-height: 1.5;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    min-height: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  * {
      &,
      &:before,
      &:after {
          box-sizing: inherit;
      }
  }

  address,
  blockquote, p, pre,
  dl, ol, ul,
  figure,
  hr,
  table,
  fieldset {
      margin-bottom: ${theme.defaultSpace};
  }

  dd, ol, ul {
      margin-left: ${theme.defaultSpace}
  }

  img {
   max-width: 100%;
   font-style: italic;
   vertical-align: middle;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    line-height: ${theme.lineHeights.headings};
    margin: 0 0 ${theme.defaultSpace};
  }

  h1 {
    font-size: ${theme.fontSizes.h1};
  }

  h2 {
    font-size: ${theme.fontSizes.h2};
    line-height: ${(
      (theme.lineHeights.headings * parseFloat(theme.fontSizes.h1)) /
      parseFloat(theme.fontSizes.h2)
    ).toFixed(2)};
  }

  h3 {
    font-size: ${theme.fontSizes.h3};
  }

  h4 {
    font-size: ${theme.fontSizes.h4};
  }

  h5 {
    font-size: ${theme.fontSizes.h5};
  }

  h6 {
    font-size: ${theme.fontSizes.h6};
  }

  p {
    margin-bottom: ${theme.defaultSpace};
  }

  hr {
    display: block;
    width: 100%;
    border: 0;
    border-top: ${theme.border};
    padding: 0;
    margin: ${theme.defaultSpace} auto;
  }
`;
