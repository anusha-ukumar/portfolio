import styles from "./index.module.css";
import { getGreetingString } from "@/utils/date-utils";

const Greeting = () => {
  return (
    <div className={styles["greeting-container"]}>
      <div className={styles["greeting-text"]}>
        <span>Hello.</span>
        <span>{`Good ${getGreetingString()}!`}</span>
      </div>
      <div className={styles["greeting-image"]}></div>
    </div>
  );
};

export default Greeting;
