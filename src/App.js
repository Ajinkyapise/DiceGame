import { useState } from "react";
import StartGame from "./Components/StartGame";
import ToggleGameplay from "./Components/ToggleGameplay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>
      {isGameStarted ? (
        <ToggleGameplay />
      ) : (
        <StartGame toggle={toggleGamePlay} />
      )}
    </>
  );
}

export default App;
