import React, { useState } from "react";
import styled from "styled-components";

const ScoreButtons = ({ onReset }) => {
  const [showDiv, setShowDiv] = useState(false);

  const handleRulesClick = () => {
    setShowDiv((prev) => !prev);
  };

  return (
    <ScoreButtonsWarpper>
      <ResetButton onClick={onReset}>Reset Score</ResetButton>
      <RulesButton onClick={handleRulesClick}>
        {showDiv ? "Hide" : "Show"} Rules
      </RulesButton>

      {showDiv && (
        <Rules>
          <h1>How to play dice game</h1>
          <div>
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>
              If the selected number equals the dice number, you get that many
              points.
            </p>
            <p>If not, 2 points are deducted.</p>
          </div>
        </Rules>
      )}
    </ScoreButtonsWarpper>
  );
};

export default ScoreButtons;

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
