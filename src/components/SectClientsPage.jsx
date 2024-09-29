import React from "react";
import styles from "../App.module.css";
import LogoFirst from "../aseets/img/logoFirst.png"
import LogoTwo from "../aseets/img/logoTwo.png"
import LogoThree from "../aseets/img/logoThree.png"
import LogoFor from "../aseets/img/logoFor.png"
import LogoFive from "../aseets/img/logoFive.png"
import LogoSix from "../aseets/img/logoSix.png"
const logos = [
    LogoFirst, LogoTwo, LogoThree, LogoFor, LogoFive, LogoSix,
    LogoFirst, LogoTwo, LogoThree, LogoFor, LogoFive, LogoSix,
    LogoFirst, LogoTwo, LogoThree, LogoFor, LogoFive, LogoSix,
    LogoFirst, LogoTwo, LogoThree, LogoFor, LogoFive, LogoSix,
    LogoFirst, LogoTwo, LogoThree, LogoFor, LogoFive, LogoSix,
];
const LogoRow = ({ logos }) => {
    return (
        <div className={styles.logoSlide}>
            {logos.map((logo, index) => (
                <div className={styles.slide} key={index}>
                    <img src={logo} alt={`Logo ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};
function SectClientsPage() {
    return (
        <div className={styles.sectClients}>
            <div className={styles.logos}>
                <div className={styles.logos}>
                    {[...Array(5)].map((_, rowIndex) => (
                        <LogoRow logos={logos} key={rowIndex} /> // Используем компонент LogoRow
                        ))}
                </div>
            </div>
            <div className={styles.textsClients}>
                <h2>trusted by </h2>
                <p>more than <span>200</span> clients from <span>10</span> industries</p>
            </div>
        </div>
    );
}

export default SectClientsPage;