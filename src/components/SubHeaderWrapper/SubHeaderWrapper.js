import { StickyHeader } from "../StickyHeader/StickyHeader";
import styles from "./SubHeaderWrapper.module.css";

function SubHeaderWrapper() {
  console.log(styles);
  return (
    <section className={styles["sub-header-wrapper"]}>
      <StickyHeader />
    </section>
  );
}

export { SubHeaderWrapper };
