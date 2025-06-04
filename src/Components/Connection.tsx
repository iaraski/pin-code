import tgImage from "../public/images/tgImage.svg"
import vkImage from "../public/images/vkImage.svg"


export default function Connection () {
    return (
        <div className="connection">
            <h2>Свяжитесь с нами</h2>
            <p className="p1">Свяжитесь с нами для обсуждения ваших идей или запроса стоимости проекта. Мы всегда рады
                новым знакомствам!</p>
            <div className="connection_info_and_form">
                <div className="connection_info">
                    <p>8 996 127-60-15</p>
                    <p>pincodpinpin8@gmail.com</p>
                    <div className="connection_info_links">
                        <a href="https://t.me/pinpincod"><img src={tgImage} alt=""/></a>
                        <a href="https://vk.com/pinpincod"><img src={vkImage} alt=""/></a>
                    </div>
                </div>
                <div className="connection_form">
                    <form>
                        <input type="text" placeholder="Ваш электронный адрес"/>
                        <input type="text" placeholder="Ваше полное имя"/>
                        <textarea placeholder="Ваши комментарии"/>
                        <button className="button_white">Отправить сообщение</button>
                    </form>
                </div>
            </div>
        </div>
    )
}