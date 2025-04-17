import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Totalscore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default Totalscore;
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
