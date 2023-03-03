import styles from "./MainContent.module.css";
import { LIST } from "../../constants";
import { Card } from "../Card/Card";
import { useFilter } from "../../hooks/useFilter";

function MainContent() {
  const [filter] = useFilter();
  return (
    <section className={styles["max-width-wrapper"]}>
      <ul className={styles["restaurant-list"]}>
        {LIST[filter + 1].restaurantList.map((item, index) => {
          return (
            <li key={index}>
              <Card {...item} />
            </li>
          );
        })}
      </ul>
      <div className={styles["search-end-wrapper"]}>
        <div className={styles["search-end"]}>End of search results</div>
        <div className={styles["search-end-image-wrapper"]}>
          <img
            alt="End of search results"
            src="https://b.zmtcdn.com/web/assets/search/6d548ba48f0e4e4b46c19ad4b15a3f011615379209.jpeg"
            className={styles["search-end-image"]}
          />
        </div>
      </div>
    </section>
  );
}

export { MainContent };
