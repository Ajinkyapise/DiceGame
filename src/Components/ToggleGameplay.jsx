import React, { useState } from "react";
import NumberButton from "./NumberButton";
import styled from "styled-components";

const ToggleGameplay = () => {
  const [showDiv, setShowDiv] = useState(false);
  const handleRulesClick = () => {
    setShowDiv((prev) => !prev);
  };
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
      <Body>
        <DiceImg>
          <img src="./cubes.png" />
          <p>Click on Dice to roll</p>
        </DiceImg>
        <ScoreButtonsWarpper>
          <ResetButton>Reset Score</ResetButton>
          <RulesButton onClick={handleRulesClick}>
            {showDiv ? "Hide" : "Show"} Rules
          </RulesButton>
        </ScoreButtonsWarpper>
      </Body>
      <Rules>
        <h1>How to play dice game</h1>
        <div>
          <p>Select any number</p>
          <p>Click on dice image</p>
          <p>
            after click on dice if selected number is equal to dice number you
            will get same point as dice
          </p>
          <p>if you get wrong guess then 2 point will be dedcuted </p>
        </div>
      </Rules>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  /* Game Page / No Rules */

  position: relative;
  width: 1440px;
  height: 856px;

  background: #ffffff;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 593px;

  position: absolute;
  width: 1280px;
  height: 151px;
  left: 80px;
  top: 64px;
`;

const ScoreContainer = styled.div`
  /* Frame 13 */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 3px;

  width: 135px;
  height: 151px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;

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
  /* Frame 7 */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px;
  gap: 30px;

  width: 552px;
  height: 138px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const ButtonsRow = styled.div`
  /* Frame 6 */

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;

  width: 552px;
  height: 72px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const BottomRightText = styled.p`
  /* Select Number */

  width: 182px;
  height: 36px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */

  color: #000000;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const Body = styled.div`
  /* Frame 14 */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 36px;

  position: absolute;
  width: 250px;
  height: 449px;
  left: 595px;
  top: 263px;
`;
const DiceImg = styled.div`
  /* Frame 12 */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 15px;

  width: 250px;
  height: 301px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  img {
    width: 250px;
    height: 250px;
  }
  p {
    width: 229px;
    height: 36px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 36px;
    color: #000000;

    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;
const ScoreButtonsWarpper = styled.div`
  /* Frame 11 */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;

  width: 220px;
  height: 112px;
`;
const ResetButton = styled.button`
  /* BUTTON */

  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  gap: 10px;

  width: 220px;
  height: 44px;

  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 5px;
  font-weight: 600;
`;

const RulesButton = styled.button`
  /* BUTTON */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  gap: 10px;

  width: 220px;
  height: 44px;

  background: #000000;
  border-radius: 5px;

  color: white;
  font-weight: 600;
`;
const Rules = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 24px;

  position: absolute;
  width: 794px;
  height: 208px;
  left: 338px;
  top: 776px;

  background: #fbf1f1;
`;
export default ToggleGameplay;
