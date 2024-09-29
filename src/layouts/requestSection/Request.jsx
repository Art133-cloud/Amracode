import React from "react";
import styles from "./Request.module.css";
import Container from "../../basic/container/Container.jsx"
function RequestSection () {
    return (
        <div className={styles.requests}>
            <Container>
                <div className={styles.requestContent}>
                    <p>Անվճար ՏՏ խորհրդատվություն</p>
                    <button>Դիմել հիմա</button>
                </div>
            </Container>
        </div>
    )
}
export default RequestSection