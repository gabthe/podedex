import { GlobalStyle } from "./styles/GlobalStyle";
import { useState } from "react";
import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetails";
import { Background } from "./styles/GlobalStyle";

function App() {
  const [screen, setScreen] = useState("pokemonList");
  const actualScreen = () => {
    switch (screen) {
      case "pokemonList":
        return <PokemonList />;
      case "pokemonDetails":
        return <PokemonDetails />;
    }
  };
  return (
    <>
      <GlobalStyle />
      <Background>{actualScreen()}</Background>
    </>
  );
}

export default App;
