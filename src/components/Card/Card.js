/* eslint-disable jsx-a11y/alt-text */
import styles from "./Card.module.css";

function Card({
  restaurantName,
  imgUrl: image,
  off: discount,
  upto,
  time,
  rating,
  types: type,
  cost,
  order_placed: orders_placed,
}) {
  return (
    <div className={styles.card}>
      <div className={styles["image-wrapper"]}>
        <img src={image} className={styles["restaurant-image"]} />
        <div className={styles["discount-band"]}>
          {discount}% OFF up to {upto}
        </div>
        <div className={styles["delivery-time"]}>{time} min</div>
      </div>
      <div className={styles["name-and-rating-wrapper"]}>
        <div className={styles["restaurant-details"]}>{restaurantName}</div>
        <div className={styles["rating-wrapper"]}>
          <div className={styles.rating}>{rating}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFFFFF"
            width="0.6rem"
            height="0.6rem"
            viewBox="0 0 20 20"
            aria-labelledby="icon-svg-title- icon-svg-desc-"
            role="img"
            className="sc-rbbb40-0 fauQLv"
          >
            <title>star-fill</title>
            <path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"></path>
          </svg>
        </div>
      </div>
      <div className={styles["type-and-cost-wrapper"]}>
        <div className={styles.type}>{type}</div>
        <div className={styles.cost}>₹{cost} for one</div>
      </div>
      <div className={styles["orders-placed"]}>
        <img
          src="https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png"
          className={styles["orders-placed-image"]}
        />
        <div>{orders_placed}+ orders placed from here recently</div>
      </div>
    </div>
  );
}

export { Card };
