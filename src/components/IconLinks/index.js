import icons from "../../constants/icons";
import styles from "./index.module.css";

const IconLinks = () => {
  return (
    <div className={styles["icons-container"]}>
      {icons.map((icon, idx) => {
        const imageStyle = styles[`icon-image-container--${icon.image}`];
        return (
          <a key={`link-${idx}`} href={icon.url} target="_blank">
            <div
              key={`icon-${idx}`}
              className={`${styles["icon-image-container"]} ${imageStyle}`}
            />
          </a>
        );
      })}
    </div>
  );
};

export default IconLinks;
