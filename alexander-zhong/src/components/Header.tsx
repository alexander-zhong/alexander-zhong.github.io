import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  const sections = ["About", "Experience", "Contact"];
  return (
    <nav className={styles.header}>
      <div className={styles.headerDiv}>
        {sections.map((section: string) => (
          <button className={styles.headerButton}>{section}</button>
        ))}
      </div>
    </nav>
  );
};

export default Header;
