import * as React from "react";
import styled from "styled-components";

import { theme } from "../theme";
import { IconExternal } from "./IconExternal";
import type { ProductData } from "../store/products/types";

const ShowOnHover = styled.div`
  position: absolute;
  display: none;
  top: 50%;
  right: ${theme.defaultSpace};
  transform: translate(-50%, -50%);
  padding: ${theme.spaces.s};
  border: ${theme.border};
  background-color: white;
  line-height: 1;
  border-radius: ${theme.borderRadius.small};
`;

const Container = styled.a`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 100%;
  background-color: white;
  border: ${theme.border};
  padding: ${theme.defaultSpace};
  text-decoration: none;
  color: ${theme.colors.text};
  border-radius: ${theme.borderRadius.small};
  &:hover {
    background-color: ${theme.colors.grey.five};
    cursor: pointer;
    ${ShowOnHover} {
      display: block;
    }
  }

  h2 {
    margin-bottom: ${theme.spaces.s};
  }
`;

export const List = styled.div`
  ${Container} + ${Container} {
    border-top: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

const Thumbnail = styled.img`
  width: 80px;
  height: 80px;
  margin-right: ${theme.defaultSpace};
`;

type Props = {
  data: ProductData
};

export const Item = ({ data }: Props) => {
  return (
    <Container href={data.url} target="_blank">
      <Thumbnail src={data.thumbnail} />
      <div>
        <h2>{data.name}</h2>
        <div>{data.day}</div>
        <div>{data.tagline}</div>
        <div>Added: {data.date}</div>
      </div>
      <ShowOnHover>
        <IconExternal />
      </ShowOnHover>
    </Container>
  );
};
