import {Link} from "react-router-dom";
import tgLogoGrey from "../public/images/tgLogoGrey.svg"
import vkLogoGrey from "../public/images/vkLogoGrey.svg"
import sponsorsLogo from "../public/images/sponsorsLogo.svg"

export default function Footer() {
    return(
        <footer className="Footer">
            <nav className="Footer__navigation">
                <Link to="/company">О компании</Link>
                <Link to="/services">Услуги</Link>
                <Link to="/portfolio">Портфолио</Link>
            </nav>
            <div className="Footer__connection">
                <div className="Footer__connection__1">
                    <p>8 996 127-60-15</p>
                    <p>pincodpinpin8@gmail.com</p>
                </div>
                <div className="Footer__connection__2">
                    <a href="https://t.me/pinpincod"><img src={tgLogoGrey} alt=""/></a>
                    <a href="https://vk.com/pinpincod"><img src={vkLogoGrey} alt=""/></a>
                </div>
            </div>
            <img className="Footer__sponsorsLogo" src={sponsorsLogo} alt=""/>
            <p className="Footer__p2">Проект создан при поддержке Федерального государственного бюджетного учреждения "Фонд содействия развитию малых форм предприятий в научно-технической сфере в рамках программы "Студенческий стартап" федерального проекта "Платформа университетского технологического предпринимательства"</p>
        </footer>
    )
}