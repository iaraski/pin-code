

export default function Processes(){
    return (
        <div className="Home__processes">
            <h2>Наш процесс</h2>
            <p className="p1">Для нас важна прозрачность. Мы подробно расскажем вам о том, как мы разрабатываем сайты и
                сервисы, чтобы вы были уверены в успехе проекта.</p>
            <div className="Home__horizontal_cards">
                <div className="Home__horizontal_card">
                    <h3>1</h3>
                    <div className="Home__horizontal_card__info">
                        <h4>Анализ требований</h4>
                        <p>Изучаем потребности клиента и определяем функциональные требования.</p>

                    </div>
                </div>
                <div className="Home__horizontal_card">
                    <h3>2</h3>
                    <div className="Home__horizontal_card__info">
                        <h4>Проектирование</h4>
                        <p>Разрабатываем привлекательный и удобный интерфейс для пользователей.</p>
                    </div>
                </div>
                <div className="Home__horizontal_card">
                    <h3>3</h3>
                    <div className="Home__horizontal_card__info">
                        <h4>Разработка</h4>
                        <p>Создаём надёжное и эффективное решение с учётом всех технических аспектов.</p>
                    </div>
                </div>
                <div className="Home__horizontal_card">
                    <h3>4</h3>
                    <div className="Home__horizontal_card__info">
                        <h4>Тестирование и запуск</h4>
                        <p>Проверяем качество работы и запускаем готовый продукт.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}