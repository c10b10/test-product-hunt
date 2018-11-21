// @flow
import React from "react";
import styled, { keyframes } from "styled-components";

import ScreenReaderText from "./ScreenReaderText";

export type LoaderVariant = "dark" | "light";

type Props = {
  variant?: LoaderVariant,
  size?: "small" | "large",
  text?: string
};

const LoaderColors = {
  dark: {
    border: "rgba(0, 0, 0, 0.7)",
    background: "rgba(0, 0, 0, 0.7)"
  },
  light: {
    border: "rgba(0, 0, 0, 0.1)",
    background: "white"
  }
};

const skBouncedelay = keyframes`
  0%{
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
  80%,
  100% {
    transform: scale(0);
  }
`;

const LoaderBounceStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: ${props => (props.size === "small" ? 6 : 12)}px;
    height: ${props => (props.size === "small" ? 6 : 12)}px;
    border: 1px solid ${props => LoaderColors[props.variant]["border"]};
    background-color: ${props => LoaderColors[props.variant]["background"]};
    margin-right: ${props => (props.size === "small" ? 5 : 8)}px;
    border-radius: 100%;
    display: inline-block;
    animation: ${skBouncedelay} 1.4s infinite ease-in-out both;
  }

  div:first-child {
    animation-delay: -0.32s;
  }

  div:nth-child(2) {
    animation-delay: -0.16s;
  }

  div:nth-child(3) {
    margin-right: 0;
  }
`;

const LoaderBounce = ({ variant, size, text, ...rest }: Props) => {
  return (
    <LoaderBounceStyled variant={variant} size={size} {...rest}>
      <div key={1} />
      <div key={2} />
      <div key={3} />
      <ScreenReaderText>{text}</ScreenReaderText>
    </LoaderBounceStyled>
  );
};
LoaderBounce.Styled = LoaderBounceStyled;

LoaderBounce.defaultProps = {
  variant: "dark",
  size: "small",
  text: "Loading..."
};

export default LoaderBounce;
