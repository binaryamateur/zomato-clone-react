import styles from "./SubFooter.module.css";
import { Expandable } from "../Expandable/Expandable";

function SubFooter() {
  return (
    <section className={`${styles["sub-footer-wrapper"]} }`}>
      <div className={`${styles["sub-footer"]} ${styles["max-width-wrapper"]}`}>
        <header className={styles.heading}>Explore options near me</header>
        <ul>
          <li>
            <Expandable
              heading={"Popular cuisines Near me"}
              list={[
                "Bakeries near me",
                "Beverage shops near me",
                "Biriyani near me",
              ]}
            />
          </li>
          <li>
            <Expandable
              heading={"Popular cuisines Near me"}
              list={[
                "Bakeries near me",
                "Beverage shops near me",
                "Biriyani near me",
                "Biriyani near me",
                "Biriyani near me",
                "Biriyani near me",
                "Biriyani near me",
                "Biriyani near me",
                "Biriyani near me",
                "Biriyani near me",
                "Biriyani near me",
              ]}
            />
          </li>
          <li>
            <Expandable
              heading={"Popular cuisines Near me"}
              list={[
                "Bakeries near me",
                "Beverage shops near me",
                "Biriyani near me",
              ]}
            />
          </li>
        </ul>
      </div>
    </section>
  );
}

export { SubFooter };
