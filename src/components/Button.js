//
import styled from "styled-components";

import { css, theme, ThemeButtonSizes } from "../theme";

export const ButtonStyled = styled.div`
  display: block;
  position: relative;
  font-weight: bold;
  line-height: ${theme.lineHeights.inputs};
  color: ${theme.colors.textSecondary};
  border: ${theme.border};
  border-radius: ${theme.borderRadius.small};
  background: white;
  padding: ${theme.buttonSizes.small.h} ${theme.buttonSizes.small.v};
  cursor: pointer;
  overflow: hidden;
  max-width: 100%;

  ${props =>
    props.size &&
    css`
      padding: ${theme.buttonSizes[props.size].h}
        ${theme.buttonSizes[props.size].v};
    `};
`;
