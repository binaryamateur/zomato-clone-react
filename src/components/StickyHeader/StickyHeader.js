import styles from "./StickyHeader.module.css";
import { filters } from "../../constants";

function StickyHeader() {
  console.log(styles);
  return (
    <nav className={styles["sticky-header"]}>
      <ul
        className={`${styles["items-wrapper"]}  ${styles["max-width-wrapper"]}`}
      >
        {filters.map((item, index) => {
          return (
            <li className={styles.button} key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export { StickyHeader };
