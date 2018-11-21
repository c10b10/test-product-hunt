import styled from "styled-components";

import { theme } from "../theme";

export const VCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const HCenter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Section = styled.div`
  margin: ${theme.defaultSpace} 0;
`;
