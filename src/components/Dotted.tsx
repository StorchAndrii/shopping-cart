import React, { FC } from "react";
import styled from "styled-components";

const StyledDotted = styled.div`
  width: 100%;
  border-bottom: 1px dotted #ffffff;
  height: 1px;
`;

const Dotted: FC = () => {
  return <StyledDotted />;
};

export default Dotted;
