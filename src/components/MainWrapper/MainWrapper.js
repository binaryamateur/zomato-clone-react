import styles from "./MainWrapper.module.css";
import { MainHeader } from "../MainHeader/MainHeader";
import { MainContent } from "../MainContent/MainContent";
import React from "react";

function MainWrapper() {
  return (
    <main className={styles.main}>
      <MainHeader />
      <MainContent />
    </main>
  );
}

export { MainWrapper };
