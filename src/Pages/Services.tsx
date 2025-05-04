import { Link } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize.ts";

export default function Services() {
    const {width} = useWindowSize();
    return (
        <main className="Services">
            <h2>Наши услуги</h2>
            <p className="p1">
                Предлагаем услуги по веб-дизайну, разработке, созданию веб-приложений и электронной коммерции для ваших
                потребностей. Узнайте о нашем опыте.
            </p>
            <div className="Services__block">
                <div>
                    <h4>Консультация по проекту/задаче/решению</h4>
                    <p>
                        Если у вас возникают вопросы по существующему{width <=768 ? <br/>:""} продукту/идея продукта, можно обратиться к нам
                    </p>
                </div>
                <Link to ={`/services/consultation/development`}>
                    <button className="button_white">Заказать</button>
                </Link>
            </div>
            <div className="Services__block">
                <div>
                    <h4>Разработка проекта</h4>
                    <p>Мы предоставляем возможность разработки продукта/MVP{width <=768 ? <br/>:""} и технической документации к нему</p>
                </div>
                <Link to ={`/services/consultation/development`}>
                    <button className="button_white">Заказать</button>
                </Link>
            </div>
            <div className="Services__block">
                <div>
                    <h4>Внедрение продукта</h4>
                    <p>
                        Если существует уже решение/продукт, но есть проблемы{width <=768 ? <br/>:""} с внедрением его в организацию
                    </p>
                </div>
                <Link to ={`/services/consultation/development`}>
                    <button className="button_white">Заказать</button>
                </Link>
            </div>
        </main>
    );
}