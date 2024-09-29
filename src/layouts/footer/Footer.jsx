import React from "react";
import styles from './Footer.module.css';
import Container from "../../basic/container/Container";
import Instagram from "../../components/Instagram"
import Facebook from "../../components/Facebook"
import In from "../../components/In"
function Footer ({customClass}) {
    const socialLinks = [
        { id: 1, component: <Instagram />},
        { id: 2, component: <Facebook />},
        { id: 3, component: <In />},
    ];
    return (
        <footer>
            <Container>
                <div className={styles[customClass]}>
                    <div className={styles.logosFooter}>
                        {socialLinks.map ((item) => {
                            return (
                                <a key = {item.id} href="#">{item.component}</a>
                            )
                        })}
                    </div>
                    <a href="#">Privacy Policy</a>
                </div>
            </Container>
        </footer>
    )
}
export default Footer