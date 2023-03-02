/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styles from "./Carousal.module.css";
import { PICTURES } from "../../constants";

function Carousal() {
  const leftArrowRef = React.useRef(null);
  const rightArrowRef = React.useRef(null);
  const currentItemRef = React.useRef(null);
  const foodItemsRef = React.useRef(null);

  const updateArrow = () => {
    if (currentItemRef.current === 0) {
      if (!leftArrowRef.current.classList.contains(styles.hidden)) {
        leftArrowRef.current.classList.add(styles.hidden);
      }
    } else {
      if (leftArrowRef.current.classList.contains(styles.hidden)) {
        leftArrowRef.current.classList.remove(styles.hidden);
      }
    }
    if (currentItemRef.current === 6) {
      if (!rightArrowRef.current.classList.contains(styles.hidden)) {
        rightArrowRef.current.classList.add(styles.hidden);
      }
    } else {
      if (rightArrowRef.current.classList.contains(styles.hidden)) {
        rightArrowRef.current.classList.remove(styles.hidden);
      }
    }
  };
  const moveCarousalLeft = () => {
    currentItemRef.current--;
    foodItemsRef.current.style.transform = `translateX(${
      currentItemRef.current * -184
    }px)`;
    updateArrow();
  };
  const moveCarousalRight = () => {
    foodItemsRef.current.style.transform = `translateX(${
      (currentItemRef.current + 1) * -184
    }px)`;
    currentItemRef.current++;
    updateArrow();
  };
  React.useLayoutEffect(() => {
    leftArrowRef.current.classList.add(styles.hidden);
  }, []);
  React.useEffect(() => {
    currentItemRef.current = 0;
  }, []);
  return (
    <>
      <div
        className={`${styles.left} ${styles.arrow}`}
        ref={leftArrowRef}
        onClick={moveCarousalLeft}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" />
        </svg>
      </div>
      <div className={`${styles["food-list"]} food-list`} ref={foodItemsRef}>
        {PICTURES.map((item, index) => {
          return (
            <nav
              key={index}
              id={`food${index}`}
              className={`${styles["food-item"]} food-item`}
            >
              <img src={item.url} className={styles["food-image"]} />
              <div className={styles["food-label"]}>{item.food}</div>
            </nav>
          );
        })}
      </div>
      <div
        className={`${styles.right}  ${styles.arrow}`}
        ref={rightArrowRef}
        onClick={moveCarousalRight}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
        </svg>
      </div>
    </>
  );
}

export { Carousal };
