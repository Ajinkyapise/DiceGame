import React, { useState } from "react";
import styled from "styled-components";
import NumberButton from "./NumberButton";

const NumberSelector = ({ value, onChange }) => {
  const arrNum = [1, 2, 3, 4, 5, 6];

  const handleNumberClick = (num) => {
    onChange(num);
  };

  return (
    <ButtonsWrapper>
      <ButtonsRow>
        {arrNum.map((num, i) => (
          <NumberButton
            key={i}
            name={num}
            onClick={() => handleNumberClick(num)}
            isSelected={value === num}
          />
        ))}
      </ButtonsRow>
      <BottomRightText>Select Number</BottomRightText>
    </ButtonsWrapper>
  );
};

export default NumberSelector;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 30px;
`;

const ButtonsRow = styled.div`
  display: flex;
  gap: 24px;
`;

const BottomRightText = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: #000000;
`;
