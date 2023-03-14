import React from "react";
import styles from "./Expandable.module.css";

function Expandable({ heading, list }) {
  const isOpen = React.useRef(false);
  const chevronRef = React.useRef();
  const listItemRef = React.useRef();

  const toggleOpenClose = () => {
    if (isOpen.current) {
      listItemRef.current.classList.remove(styles.visible);
      chevronRef.current.style.transform = "rotate(0deg)";
    } else {
      listItemRef.current.classList.add(styles.visible);
      chevronRef.current.style.transform = "rotate(-180deg)";
    }
    isOpen.current = !isOpen.current;
  };

  return (
    <div className={styles.expandable}>
      <div className={styles["heading-wrapper"]} onClick={toggleOpenClose}>
        <div className={styles.heading}>{heading}</div>
        <svg
          ref={chevronRef}
          xmlns="http://www.w3.org/2000/svg"
          fill="#1C1C1C"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          aria-labelledby="icon-svg-title- icon-svg-desc-"
          role="img"
          className={`sc-rbbb40-0 iRDDBk ${styles["arrow-toggle"]}`}
        >
          <title>chevron-down</title>
          <path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path>
        </svg>
      </div>
      <div ref={listItemRef} className={styles["list-item-wrapper"]}>
        {list.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <span className={styles["list-item"]}>{item}</span>
              {index !== list.length - 1 ? (
                <span className={`${styles.seperator}`}></span>
              ) : null}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export { Expandable };
