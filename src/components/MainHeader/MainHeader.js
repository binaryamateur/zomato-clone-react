import styles from "./MainHeader.module.css";

function MainHeader() {
  return (
    <header
      className={`${styles["max-width-wrapper"]} ${styles["main-header"]}`}
    >
      <div className={styles.heading}>
        Delivery Restaurants in Thakur Wara, Sohna, India
      </div>
    </header>
  );
}

export { MainHeader };
