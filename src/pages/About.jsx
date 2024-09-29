import React from "react";
import Request from "../layouts/requestSection/Request"
import Header from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";
import SectionAbout from "../components/SectAboutPage";
import styles from "../App.module.css";
function AboutPage () {
    return (
        <div className={styles.aboutPage}>
            <Request />
            <Header />
            <SectionAbout />
            <Footer customClass="forAboutFooter"/>
        </div>
    )
}
export default AboutPage