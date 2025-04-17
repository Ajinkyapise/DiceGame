import React from "react";
import styled from "styled-components";

const DiceImage = ({ onRoll, onClick }) => {
  const diceRoll = () => {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    onRoll(randomNum);
    if (onClick) onClick(); // Trigger gameplay logic
  };

  return (
    <DiceImg>
      <img src="/cubes.png" alt="Dice" onClick={diceRoll} />
      <p>Click on Dice to roll</p>
    </DiceImg>
  );
};

const DiceImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  img {
    width: 250px;
    height: 250px;
    cursor: pointer;
    transition: transform 0.2s;
  }

  img:hover {
    transform: scale(1.05);
  }

  p {
    font-weight: 500;
    font-size: 26px;
    color: #000000;
  }
`;

export default DiceImage;
