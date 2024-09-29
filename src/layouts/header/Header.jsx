import React from "react";
import styles from "./Header.module.css";
import Container from "../../basic/container/Container";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";
import Hamburger from "../hamburger/Hamburger"
import logoLink from "../../pages/HomePage"
function Menu ({href,text}) {
    return (
        <li><Link to={href}>{text}</Link></li>
    )
}
function MenuHeader () {
    const MenuBaza = [
        {
            id: 1,
            text: "Our services",
            link: "/pages/OurServices"
        }, 
        {
            id: 2,
            text: "About us",
            link: "/pages/About"
        }
    ]
    return (
        <ul>
        {MenuBaza.map ((item) => {
            return (
                <Menu key = {item.id} href = {item.link} text = {item.text}/>
            )
        })}
        <li><Link to="/pages/Clients">Clients of amra<span>code</span></Link></li>
        </ul>
    )
}
function LogoHeader () {
    return (
        <Link to = "/">
            <Logo />
        </Link>
    )
}
function Header () {

    return (
        <header>
            <Container>
                    <nav>
                        <LogoHeader />
                        <MenuHeader />
                    </nav>
                <Hamburger />
            </Container>
        </header>

    )
}
export default Header;
