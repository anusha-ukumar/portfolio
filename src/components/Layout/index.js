import Navigation from "@/components/Navigation";
import IconLinks from "@/components/IconLinks";
import styles from "./index.module.css";

const Layout = ({ children, currentTabIndex }) => {
  return (
    <div className={styles["page-conrainer"]}>
      <Navigation currentTabIndex={currentTabIndex} />
      <div className={styles["icons-container"]}>
        <IconLinks />
        {children}
      </div>
    </div>
  );
};

export default Layout;
