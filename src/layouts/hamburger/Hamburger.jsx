import React from "react";
import styles from "../hamburger/Hamburger.module.css"
import Insta from "../../components/Instagram";
import Facebook from "../../components/Facebook";
import In from "../../components/In";
function Hamburger () {
    return (
        <div className={styles.hamburgerMenu}>
        <input id="menu__toggle" className={styles.menuToggle} type="checkbox" />
        <label className={styles.menuBtn} htmlFor="menu__toggle">
          <span></span>
        </label>
  
        <ul className={styles.menuBox}>
            <li>Our Services</li>
            <li>About us</li>
            <li>Clients of amra<span>code</span></li>
            <li>Privacy</li>
            <div className={styles.logosMenuBox}>
                    <Insta />
                    <Facebook />
                    <In />
            </div>
        </ul>
      </div>
    )
}
export default Hamburger