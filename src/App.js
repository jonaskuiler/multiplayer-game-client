import { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import { GameContainer } from "./GameContext";
import { GameUI } from "./GameUI";

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }
  
  body {
    font-family: sans-serif;
  }
`;

export default function App() {
  return (
    <GameContainer>
      <Reset />
      <GlobalStyle />
      <GameUI />
    </GameContainer>
  );
}
