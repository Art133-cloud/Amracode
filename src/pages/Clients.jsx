import React from "react";
import Request from "../layouts/requestSection/Request"
import Header from "../layouts/header/Header"
import Footer from "../layouts/footer/Footer"
import SectClientsPage from "../components/SectClientsPage";
import styles from "../App.module.css";

function Clients () {
    return (
        <div className={styles.clientsPage}>
            <Request />
            <Header />
            <SectClientsPage />
            <Footer customClass="forAboutFooter"/>
        </div>
    )
}
export default Clients