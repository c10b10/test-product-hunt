import * as React from "react";
import styled from "styled-components";

import { theme } from "../theme";
import { Logo } from "./Logo";

const Wrapper = styled.div`
  background: white;
  border-bottom: ${theme.border};
  display: flex;
  justify-content: center;
  padding: ${theme.defaultSpace} 0;
  margin-bottom: ${theme.defaultSpace};
`;

export const Header = () => (
  <Wrapper>
    <Logo />
  </Wrapper>
);
