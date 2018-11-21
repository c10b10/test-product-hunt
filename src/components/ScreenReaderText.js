import styled, { css } from "styled-components";

export const hidenButReaderAccessible = css`
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute !important;
  width: 1px;
  word-wrap: normal !important;
`;

const ScreenReaderText = styled.span`
  ${hidenButReaderAccessible};
`;

export default ScreenReaderText;
