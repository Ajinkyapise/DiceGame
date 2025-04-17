import React, { useState } from "react";
import styled from "styled-components";

import NumberSelector from "./NumberSelector";
import Totalscore from "./Totalscore";
import DiceImage from "./DiceImage";
import ScoreButtons from "./ScoreButtons";

const ToggleGameplay = () => {
  const [diceNumber, setDiceNumber] = useState(null);
  const [selectedNum, setSelectedNum] = useState(null);
  const [score, setScore] = useState(0);
  const [resultMessage, setResultMessage] = useState("");

  const handleGamePlay = () => {
    if (selectedNum === null) {
      alert("Please select a number first!");
    } else if (diceNumber === selectedNum) {
      setScore(score + 5);
      setResultMessage("🎉 You Win!");
    } else {
      setScore(score - 2);
      setResultMessage("❌ You Lose!");
    }
  };

  const handleReset = () => {
    setScore(0);
    setDiceNumber(null);
    setSelectedNum(null);
    setResultMessage("");
  };

  return (
    <Container>
      <HeadingContainer>
        <Totalscore score={score} />
        <NumberSelector value={selectedNum} onChange={setSelectedNum} />
      </HeadingContainer>

      <ContentWrapper>
        <Body>
          <DiceImage onClick={handleGamePlay} onRoll={setDiceNumber} />
          {diceNumber && <p>You rolled: {diceNumber}</p>}
          {resultMessage && <ResultText>{resultMessage}</ResultText>}

          <ScoreButtons onReset={handleReset} />
        </Body>
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
  width: 1440px;
  height: 856px;
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  max-width: 1280px;
  margin-bottom: 60px;
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

const ResultText = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => (props.children.includes("Win") ? "green" : "red")};
`;
