import React, { useState } from "react";
import NumberButton from "./NumberButton";
import styled from "styled-components";

const ToggleGameplay = () => {
  const [showDiv, setShowDiv] = useState(false);
  const [selectedNum, setSelectedNum] = useState(null); // Fixed typo in variable name

  const handleRulesClick = () => {
    setShowDiv((prev) => !prev);
  };

  const handleNumberClick = (value) => {
    if (selectedNum !== value) {
      setSelectedNum(value); // Update state only if the value changes
    }
  };

  const arrNum = [1, 2, 3, 4, 5, 6];
  console.log(selectedNum);

  return (
    <Container>
      <HeadingContainer>
        <ScoreContainer>
          <h1>0</h1>
          <p>Total Score</p>
        </ScoreContainer>

        <ButtonsWrapper>
          <ButtonsRow>
            {arrNum.map((value, i) => (
              <NumberButton
                key={i}
                name={value}
                onClick={() => handleNumberClick(value)} // Use the new handler
              ></NumberButton>
            ))}
          </ButtonsRow>
          <BottomRightText>Select Number</BottomRightText>
        </ButtonsWrapper>
      </HeadingContainer>

      <ContentWrapper>
        <Body>
          <DiceImg>
            <img src="/cubes.png" alt="Dice" />
            <p>Click on Dice to roll</p>
          </DiceImg>

          <ScoreButtonsWarpper>
            <ResetButton>Reset Score</ResetButton>
            <RulesButton onClick={handleRulesClick}>
              {showDiv ? "Hide" : "Show"} Rules
            </RulesButton>
          </ScoreButtonsWarpper>
        </Body>

        {showDiv && (
          <Rules>
            <h1>How to play dice game</h1>
            <div>
              <p>Select any number</p>
              <p>Click on dice image</p>
              <p>
                After clicking, if the selected number equals the dice number,
                you get points equal to the dice.
              </p>
              <p>If it's a wrong guess, 2 points are deducted.</p>
            </div>
          </Rules>
        )}
      </ContentWrapper>
    </Container>
  );
};

export default ToggleGameplay;

// Styled Components

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  /* Game Page / No Rules */

  width: 1440px;
  height: 856px;

  background: #ffffff;
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  max-width: 1280px;
  margin-bottom: 60px;
`;

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 0;
    font-weight: 500;
    font-size: 100px;
    margin-bottom: -30px;
  }

  p {
    font-weight: 500;
    font-size: 24px;
  }
`;

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

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
`;

const DiceImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  img {
    width: 250px;
    height: 250px;
  }

  p {
    font-weight: 500;
    font-size: 26px;
    color: #000000;
  }
`;

const ScoreButtonsWarpper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ResetButton = styled.button`
  width: 220px;
  height: 44px;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 5px;
  font-weight: 600;
`;

const RulesButton = styled.button`
  width: 220px;
  height: 44px;
  background: #000000;
  color: white;
  border-radius: 5px;
  font-weight: 600;
`;

const Rules = styled.div`
  background: #fbf1f1;
  padding: 20px;
  margin-top: 40px;
  max-width: 800px;
  width: 90%;
  text-align: left;
  border-radius: 8px;

  h1 {
    margin-bottom: 16px;
  }

  p {
    margin: 4px 0;
  }
`;
