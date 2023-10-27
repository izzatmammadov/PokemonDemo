import React from "react";
import styles from "./PokeCard.module.css";

export const PokeCard = (props) => {
  const pokemonImg = (id) => {
    const newID = id.toString();
    const resultID =
      newID.length == 1 ? "00" + newID : newID.length == 2 ? "0" + newID : id;
    return resultID;
  };

  return (
    <div className={`${styles.card}`}>
      <h2>{props.name}</h2>
      <img
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonImg(
          props.id
        )}.png`}
      />
      <p>Type: {props.type}</p>
      <p>EXP: {props.base_experience}</p>
    </div>
  );
};
