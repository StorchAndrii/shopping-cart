import React, { FC, ReactNode } from "react";

import styled from "styled-components";

export interface FlexProps {
  direction?: string;
  align?: string;
  justify?: string;
  margin?: string;
  width?: string;
  height?: string;
  marginTop?: string;
  fontSize?: string;
  cursor?: string;
}

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: ${({ align }) => align || "stretch"};
  justify-content: ${(props) => props.justify || '"stretch"'};
  margin: ${({ margin }) => margin || "0"};
  width: ${({ width }) => width || ""};
  height: 100%;
`;
interface IProps extends FlexProps {
  children: ReactNode;
}
const Flex: FC<IProps> = (props) => {
  return <StyledFlex {...props}></StyledFlex>;
};

export default Flex;
