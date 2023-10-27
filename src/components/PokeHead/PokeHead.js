import React from "react";
import styles from "./PokeHead.module.css";
import { Button } from "../Button/Button";

export const PokeHead = (props) => {
  console.log("PokeHeadin", props);
  return (
    <div className={styles.content}>
      <h1 className={`${styles.title} ${styles.font_l}`}>Pokemons Battle</h1>
      <Button funkCagir={props.appdekiHead}></Button>
    </div>
  );
};
