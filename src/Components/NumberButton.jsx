import React from "react";
import styled from "styled-components";
const NumberButton = ({ name }) => {
  return <NumButton>{name}</NumButton>;
};
const NumButton = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  height: 72px;
  width: 72px;
`;

export default NumberButton;
