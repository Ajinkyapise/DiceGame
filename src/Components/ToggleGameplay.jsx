import React from "react";
import NumberButton from "./NumberButton";
import styled from "styled-components";

const ToggleGameplay = () => {
  return (
    <Container>
      <HeadingContainer>
        <ScoreContainer>
          <h1>0</h1>
          <p>Total Score</p>
        </ScoreContainer>

        <ButtonsWrapper>
          <ButtonsRow>
            <NumberButton name={1} />
            <NumberButton name={2} />
            <NumberButton name={3} />
            <NumberButton name={4} />
            <NumberButton name={5} />
            <NumberButton name={6} />
          </ButtonsRow>
          <BottomRightText>Select Number</BottomRightText>
        </ButtonsWrapper>
      </HeadingContainer>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 48px;
`;

const ScoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin: 0;
    margin-bottom: -30px;
    font-weight: 500;
    font-size: 100px;
  }

  p {
    font-weight: 500;
    font-size: 24px;
  }
`;

const ButtonsWrapper = styled.div`
  position: relative;
  width: 440px;
  height: 140px; /* Enough room for buttons + label */
  border: 2px solid #00000020;
`;

const ButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  padding: 8px;
`;

const BottomRightText = styled.p`
  position: absolute;
  bottom: 8px;
  right: 8px;
  margin: 0;
  font-weight: bold;
  font-size: 14px;
`;

export default ToggleGameplay;
