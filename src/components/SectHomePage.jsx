import React from "react";
import Container from "../basic/container/Container";
import styles from "../App.module.css";
import circleOpacityy from "../aseets/img/Section.png"
import ball from "../aseets/img/ball.png";
import BlackBall from "../aseets/img/blackball.png";
function WhitleBalls () {
    return (
        <div className={styles.whiteballs}>
            <img className={styles.ballOne} src={ball} alt="" id="ballOne"/>
            <img className={styles.ballTwo} src={ball} alt="" id="ballTwo"/>
            <img className={styles.ballThree} src={ball} alt="" id="ballThree"/>
        </div>
    )
}
function BlackBalls () {
    return (
        <div className={styles.blackballs}>
            <img className={styles.blackballOne} src={BlackBall} alt="" id="ballOne"/>
            <img className={styles.blackballTwo} src={BlackBall} alt="" id="ballTwo"/>
            <img className={styles.blackballThree} src={BlackBall} alt="" id="ballThree"/>
        </div>
    )
}
function SectHomePage () {
    return (
        <div className={styles.contentSectHomePage}>
            <div className={styles.circle}>
                <div className={styles.circleParent}>
                    <div className={styles.circleOpacity}>
                    </div>
                    <div className={styles.circleWithBackground}>
                        <img className={styles.circleWithBackgroundchild} src={circleOpacityy} alt="circle" />
                        <WhitleBalls />
                        <BlackBalls />
                    </div>
                    <div className={styles.circleRotateContainer}>
                        <div className={styles.spiner}>

                        </div>
                        <div className={styles.circlesOpacitys}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            <div className={styles.cirlebackground}>
            </div>
            </div>
            <Container>
            <div className={styles.bigTextSectHomePage}>
                <h1>Strength <span>in code,</span></h1>
                <h2>Stability <span>in success</span></h2>
            </div>
            <div className={styles.buttonSectHomePage}>
                <button>Request a call</button>
            </div>
            </Container>
        </div>
    )
}
export default SectHomePage