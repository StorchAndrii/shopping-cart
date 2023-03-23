import React, { FC, ReactNode } from "react";

import styled from "styled-components";
import { FlexProps } from "./Flex";

const StyledTitle = styled.h1<FlexProps>`
  color: #ffffff;
  text-align: center;
  margin-top: ${({ marginTop }) => marginTop || "24px"};
`;

interface IProps extends FlexProps {
  children: ReactNode;
}

const Title: FC<IProps> = (props) => {
  return <StyledTitle {...props}></StyledTitle>;
};

export default Title;
