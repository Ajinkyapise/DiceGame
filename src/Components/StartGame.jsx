import React from "react";
import styled from "styled-components";
const StartGame = ({ toggle }) => {
  return (
    <Container>
      <img src="./dices.png"></img>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Click Me</Button>
      </div>
    </Container>
  );
};
export default StartGame;

const Button = styled.button`
  background-color: #69d85a;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  transition: 0.3s background ease-in;

  &:hover {
    background-color: #bd6868;
    cursor: pointer;
    transition: 0.3s background ease-in;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 522px;
  max-width: 1182px;
  background-color: #f8f9fa;
  font-family: Arial, sans-serif;
  color: #343a40;
  text-align: center;
  justify-content: center;
  gap: 0px;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
      bottom: 0px;
    }
  }
`;
