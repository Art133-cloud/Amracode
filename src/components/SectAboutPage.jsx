import React from "react";
import styles from "../App.module.css";
function AboutPage () {
    return (
        <div className={styles.contentAboutPage}>
            <div className={styles.topContentAboutPage}>
                <div className={styles.textwithreddiv}>
                    <div className={styles.reddiv}></div>
                    <h2>strength in code, stability in success</h2>
                </div>
                <div className={styles.longtextwithreddiv}>
                    <p>Amracode believes that high-quality code and reliable technology are essential components for achieving success in business. By investing in robust software solution today, companies lay a solid foundation for their further growth.</p>
                </div>
            </div>
            <div className={styles.bottomContentAboutPage}>
                <div className={styles.titleBottomContent}>
                    <h2>long story short</h2>
                    <div className={styles.line}>

                    </div>
                </div>
                <div className={styles.textUnderTitle}>
                    <p>Amracode positioned itself as being more than just a software services provider. With a storied past rooted in serving an exclusive club of diverse multi-industrial companies, we have a unique perspective on the needs of modern enterprises. <br /><br />
                    Today, we continue to provide cutting-edge solutions for business process automation and digitalization. Our team of experts works closely with each client to understand their unique needs and challenges and develops customized solutions to help them achieve their goals. <br /><br />
                    We are not just a software services provider - we're a partner in your success. Amracode is proud of the role it has played in helping hundreds of companies multiply their sales and increase business efficiency, and now we look forward to helping many more businesses achieve their full potential in the years to come.</p>
                </div>
            </div>
        </div>
    )
}
export default AboutPage