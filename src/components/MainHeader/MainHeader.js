import styles from "./MainHeader.module.css";
import { useCurrentLocation } from "../../hooks/useCurrentLocation";
import { locationList } from "../../constants";

function MainHeader() {
  const [locationIndex] = useCurrentLocation();
  return (
    <header
      className={`${styles["max-width-wrapper"]} ${styles["main-header"]}`}
    >
      <div className={styles.heading}>
        Delivery Restaurants in {locationList[locationIndex][0]},{" "}
        {locationList[locationIndex][1]}, {locationList[locationIndex][2]}
      </div>
    </header>
  );
}

export { MainHeader };
