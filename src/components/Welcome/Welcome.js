import React from "react";
import styles from "./Welcome.module.css";

export const Welcome = () => {
  return (
    <div className={styles.welcome}>
      Click the <span>Get Pokemons</span> button to start the game.
    </div>
  );
};
