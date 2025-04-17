import React from "react";
import styled from "styled-components";

const NumberButton = ({ name, onClick, isSelected }) => {
  return (
    <NumButton onClick={onClick} $selected={isSelected}>
      {name}
    </NumButton>
  );
};

const NumButton = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #000;
  height: 72px;
  width: 72px;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${(props) => (props.$selected ? "#000" : "#fff")};
  color: ${(props) => (props.$selected ? "#fff" : "#000")};

  :hover {
    background: #000;
    color: #fff;
  }
`;

export default NumberButton;
