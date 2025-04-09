import {Link} from "react-router-dom";
import triager from "../public/images/triager.png"
import janna from "../public/images/janna.png"
import kastel from "../public/images/kastel.png"


export default function BriefCase() {
    return (
        <div className="Home__briefcase">
            <h2>Наш портфель</h2>
            <p className="p1">Посмотрите, как мы работаем! Ознакомьтесь с нашим портфолио и убедитесь, как наш опыт
                помогает нам создавать успешные проекты. </p>
            <div className="Home__briefcase__cards">
                <div className="Home__briefcase__card">
                    <Link to="/triager"><img src={triager} alt=""/></Link>
                    <h4>“Triager”</h4>
                    <p>Веб-приложение для сортировки и обработки входных данных</p>
                </div>
                <div className="Home__briefcase__card">
                    <Link to="/janna"><img src={janna} alt=""/></Link>
                    <h4>“Жанна”</h4>
                    <p>Робот-администратор</p>
                </div>
                <div className="Home__briefcase__card">
                    <Link to="/kastel"><img src={kastel} alt=""/></Link>
                    <h4>“Кастель”</h4>
                    <p>Туристская онлайн-платформа</p>
                </div>
            </div>
        </div>
    )
}