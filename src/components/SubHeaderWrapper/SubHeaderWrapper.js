import { StickyHeader } from "../StickyHeader/StickyHeader";
import { SubHeader } from "../SubHeader/SubHeader";
import styles from "./SubHeaderWrapper.module.css";

function SubHeaderWrapper() {
  console.log(styles);
  return (
    <section className={styles["sub-header-wrapper"]}>
      <StickyHeader />
      <SubHeader />
    </section>
  );
}

export { SubHeaderWrapper };
