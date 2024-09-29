import React from "react";
import Request from "../layouts/requestSection/Request"
import Header from "../layouts/header/Header"
import Footer from "../layouts/footer/Footer"
import styles from "../App.module.css";
function OurServices () {
    return (
        <div className={styles.ourServicesPage}>
        <Request />
        <Header />
        <Footer customClass="forPositionOff" />
        </div>
    )
}
export default OurServices