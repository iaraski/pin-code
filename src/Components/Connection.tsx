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
                    <form action="https://api.web3forms.com/submit" method="POST">
                        <input type="hidden" name="access_key" value="e698a120-9f85-4a8a-9fdc-2706117c6c73"/>
                        <input type="text" name={"Почта"} placeholder="Ваш электронный адрес"/>
                        <input type="text" name={"Имя"} placeholder="Ваше полное имя"/>
                        <textarea placeholder="Ваши комментарии" name={"Сообщение"}/>
                        <input type="checkbox" name="botcheck" className="hidden" style={{display:"none"}}/>
                        <button type={"submit"} className="button_white">Отправить сообщение</button>
                    </form>
                </div>
            </div>
        </div>
    )
}