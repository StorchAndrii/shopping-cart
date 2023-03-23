import React, { FC, ReactNode } from "react";

import styled from "styled-components";
import { FlexProps } from "./Flex";

const StyledText = styled.div<FlexProps>`
  color: #ffffff;
  text-align: center;
  margin: ${({ margin }) => margin || "0"};
  font-size: ${({ fontSize }) => fontSize || "26px"};
  cursor: ${({ cursor }) => cursor || "auto"};
  white-space: nowrap;
`;

interface IProps extends FlexProps {
  children: ReactNode;
  onClick?: () => void;
}

const Subtitle: FC<IProps> = (props) => {
  return <StyledText {...props} onClick={props.onClick}></StyledText>;
};

export default Subtitle;
