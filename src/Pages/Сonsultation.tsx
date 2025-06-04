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
            <form className="Consultation__form" action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="e698a120-9f85-4a8a-9fdc-2706117c6c73"/>
                <input type="text" name={"Имя"} placeholder="Ваше полное имя"/>
                <input type="text" name={"Почта"} placeholder="Ваш электронный адрес"/>
                <input type="text" name={"Номер телефона"} placeholder="Ваш номер телефона"/>
                <textarea name={"Сообщение"} placeholder="Ваши комментарии"/>
                <input type="checkbox" name="botcheck" className="hidden" style={{display: "none"}}/>
                <button className="button_white">Отправить сообщение</button>
            </form>
        </main>
    );
};

export default Consultation;