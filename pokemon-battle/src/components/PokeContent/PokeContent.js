import React from "react";
import styles from "./PokeContent.module.css";
import { PokeCard } from "../PokeCard/PokeCard";

export const PokeContent = (props) => {
  console.log(props);
  return (
    <>
      <p className={styles.title}>
        {props.isWinner ? "Winner: " : "Lose: "}
        <span
          className={styles.title_power}
          style={{ color: props.isWinner ? "#22e600" : "#ff0000" }}
        >
          {props.power}
        </span>
      </p>

      <div className={`${styles.content}`}>
        {props.pokemons?.map((pokemon) => (
          <PokeCard key={"pokeCard" + pokemon.id} {...pokemon} />
        ))}
      </div>
    </>
  );
};
