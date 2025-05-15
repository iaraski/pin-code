import logo from "./../public/images/logo.png"
import {Link} from "react-router-dom";
import {useState} from "react";
import useWindowSize from "../hooks/useWindowSize.ts";

export default function Header(){
    const [activeLink, setActiveLink] = useState<string>("Главная")
    function handleLinkClick(activeLink:string){
        setActiveLink(activeLink)
    }
    const {width} = useWindowSize();
    return (
        <header className="Header">
            {width > 1000 && <>
                <nav className="nav nav__1">
                    <Link to="/portfolio" className={activeLink === "portfolio" ? "active" : ""}
                          onClick={() => handleLinkClick("portfolio")}>Портфолио</Link>
                    <Link to="/services" className={activeLink === "services" ? "active" : ""}
                          onClick={() => handleLinkClick("services")}>Услуги</Link>
                    <Link to="/products" className={activeLink === "products" ? "active" : ""}
                          onClick={() => handleLinkClick("products")}>Продукты</Link>
                </nav>
                <Link to="/" className={activeLink === "logo_container" ? "logo_container" : "logo_container"}
                      onClick={() => handleLinkClick("logo_container")}>
                    <img src={logo} alt=""/>
                </Link>
                <nav className=" nav nav__2">
                    <Link to="/blog" className={activeLink === "blog" ? "active" : ""}
                          onClick={() => handleLinkClick("blog")}>Блог</Link>
                    <Link to="/company" className={activeLink === "company" ? "active" : ""}
                          onClick={() => handleLinkClick("company")}>О компании</Link>
                </nav>
            </>}
            {width <= 1000 && <>
                <Link to = ""><img src={logo} alt=""/></Link>
                <nav>
                <Link to="/portfolio" className={activeLink === "portfolio" ? "active" : ""}
                          onClick={() => handleLinkClick("portfolio")}>Портфолио
                    </Link>
                    <Link to="/services" className={activeLink === "services" ? "active" : ""}
                          onClick={() => handleLinkClick("services")}>Услуги
                    </Link>
                    <Link to="/products" className={activeLink === "products" ? "active" : ""}
                          onClick={() => handleLinkClick("products")}>Продукты
                    </Link>
                    <Link to="/blog" className={activeLink === "blog" ? "active" : ""}
                          onClick={() => handleLinkClick("blog")}>Блог</Link>
                    <Link to="/company" className={activeLink === "company" ? "active" : ""}
                          onClick={() => handleLinkClick("company")}>О компании</Link>
                </nav>
            </>}
        </header>
    )
}