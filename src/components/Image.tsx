import React, { FC } from "react";
import styled from "styled-components";
import { FlexProps } from "./Flex";

const StyledImg = styled.img<FlexProps>`
  height: ${({ height }) => height || "100px"};
  width: ${({ width }) => width || "100px"};
  border-radius: 20px;
`;

interface IProps extends FlexProps {
  img: string;
}

const Image: FC<IProps> = (props) => {
  return <StyledImg {...props} alt={"img"} src={props.img} />;
};

export default Image;
