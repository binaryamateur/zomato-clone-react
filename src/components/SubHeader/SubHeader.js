/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styles from "./SubHeader.module.css";
import { Carousal } from "../Carousal/Carousal";

function SubHeader() {
  return (
    <section className={styles["sub-header-wrapper"]}>
      <div className={styles["full-bleed"]}></div>
      <div className={`${styles["sub-header"]} ${styles["max-width-wrapper"]}`}>
        <div className={styles.heading}>Inspiration for your first order</div>
        <Carousal />
      </div>
    </section>
  );
}

export { SubHeader };
