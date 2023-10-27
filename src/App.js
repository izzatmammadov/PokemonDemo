import { PokeHead } from "./components/PokeHead/PokeHead";
import { PokeContent } from "./components/PokeContent/PokeContent";
import pokemonData from "./data/pokemon.json";
import { useState } from "react";
import { Welcome } from "./components/Welcome/Welcome";

function App() {
  const [firstTeam, setFirstTeam] = useState([]);
  const [secondTeam, setSecondTeam] = useState([]);

  const start = () => {
    let newFirstTeam = [...pokemonData];
    let newSecondTeam = [];

    while (newSecondTeam.length < newFirstTeam.length) {
      const randomIndex = Math.floor(Math.random() * newFirstTeam.length);
      const rmvPokemon = newFirstTeam.splice(randomIndex, 1);

      newSecondTeam.push(rmvPokemon[0]);
    }

    setFirstTeam(newFirstTeam);
    setSecondTeam(newSecondTeam);

    console.log("first", newFirstTeam);
    console.log("second", newSecondTeam);
  };

  const firstTeamPower = firstTeam?.reduce(
    (sum, item) => sum + item?.base_experience,
    0
  );
  const secondTeamPower = secondTeam?.reduce(
    (sum, item) => sum + item?.base_experience,
    0
  );

  return (
    <>
      <PokeHead appdekiHead={start} />

      {!!secondTeam.length ? (
        <>
          <PokeContent
            isWinner={firstTeamPower > secondTeamPower}
            power={firstTeamPower + " EXP"}
            pokemons={firstTeam}
          />
          <h2
            style={{
              textAlign: "center",
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "60px",
              color: "#d9dd00",
              fontStyle: "italic",
            }}
          >
            VS
          </h2>
          <PokeContent
            isWinner={secondTeamPower > firstTeamPower}
            power={secondTeamPower + " EXP"}
            pokemons={secondTeam}
          />
        </>
      ) : (
        <Welcome />
      )}
    </>
  );
}

export default App;
