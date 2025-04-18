import { Link } from "react-router-dom";

export default function Services() {
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
                        Если у вас возникают вопросы по существующему продукту/идея продукта, можно обратиться к нам
                    </p>
                </div>
                <button className="button_white">
                    <Link to={`/services/consultation/consultation`}>Заказать</Link>
                </button>
            </div>
            <div className="Services__block">
                <div>
                    <h4>Разработка проекта</h4>
                    <p>Мы предоставляем возможность разработки продукта/MVP и технической документации к нему</p>
                </div>
                <button className="button_white">
                    <Link to={`/services/consultation/development`}>Заказать</Link>
                </button>
            </div>
            <div className="Services__block">
                <div>
                    <h4>Внедрение продукта</h4>
                    <p>
                        Если существует уже решение/продукт, но есть проблемы с внедрением его в организацию
                    </p>
                </div>
                <button className="button_white">
                    <Link to={`/services/consultation/integration`}>Заказать</Link>
                </button>
            </div>
        </main>
    );
}