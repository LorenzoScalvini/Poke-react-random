import React from "react";
import styles from "./Button.module.css";

export default function ({ onClick, children }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
