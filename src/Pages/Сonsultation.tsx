import { useParams } from "react-router-dom";

const Consultation = () => {
    const { serviceType } = useParams();

    const getTitle = () => {
        switch (serviceType) {
            case "consultation":
                return "Консультация по проекту/задаче/решению";
            case "development":
                return "Разработка проекта";
            case "integration":
                return "Внедрение продукта";
            default:
                return "Консультация";
        }
    };

    return (
        <main className="Consultation">
            <h2>{getTitle()}</h2>
            <p className="p1">
                Свяжитесь с нами для обсуждения ваших идей или запроса стоимости проекта. Мы всегда рады новым
                знакомствам!
            </p>
            <form className="Consultation__form">
                <input type="text" placeholder="Ваше полное имя" />
                <input type="text" placeholder="Ваш электронный адрес" />
                <input type="text" placeholder="Ваш номер телефона" />
                <textarea placeholder="Ваши комментарии" />
                <button className="button_white">Отправить сообщение</button>
            </form>
        </main>
    );
};

export default Consultation;