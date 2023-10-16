import { useState } from "react";
import tabs from "../../constants/tabs";
import Link from "next/link";
import styles from "./index.module.css";

type Props = {
  currentTabIndex: number;
};

const Navigation = ({ currentTabIndex }: Props) => {
  const [tabIndex, setTabIndex] = useState(currentTabIndex);
  const onTabClick = (e: any, idx: number): void => {
    setTabIndex(idx);
  };
  return (
    <div className={styles["tabs-container"]}>
      {tabs.map((tab, idx) => {
        return (
          <Link href={`/${tab.id}`} key={`link-${idx}`}>
            <div
              key={`tab-${idx}`}
              id={tab.id}
              className={styles["tab-container"]}
              onClick={(e) => onTabClick(e, idx)}
            >
              <div
                className={styles["selected-icon"]}
                style={{ opacity: tabIndex === idx ? 1 : 0 }}
              />
              <span>{tab.label}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Navigation;
