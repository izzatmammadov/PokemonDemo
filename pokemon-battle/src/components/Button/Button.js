import React from 'react'
import styles from "./Button.module.css"

export const Button = ( {funkCagir, children="Get Pokemons"}  ) => {
  return (
    <button onClick={funkCagir} className={`${styles.btn} ${styles.font_m} ${styles.color_start}`}>{children}</button>
  )
}
