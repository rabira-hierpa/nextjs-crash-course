import Link from "next/link";
import React from "react";
import styles from "./styles/Navbar.module.css";

function NavBar() {
  return (
    <div className={styles.navbar}>
      NavBar Component
      <div>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
}

export default NavBar;
