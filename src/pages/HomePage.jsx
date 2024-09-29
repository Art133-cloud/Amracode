import React from "react";
import Request from "../layouts/requestSection/Request"
import Header from "../layouts/header/Header"
import SectHomePage from "../components/SectHomePage";
import Footer from "../layouts/footer/Footer"
import styles from "../App.module.css";
function HomePage () {
    return (
        <div className={styles.homePage}>
        <Request />
        <Header />
        <SectHomePage />
        <Footer customClass="contentFooter"/>
        </div>
    )
}
export default HomePage