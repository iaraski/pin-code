import Infoblock, {Block} from "../Components/Infoblock.tsx";
import janna from "../public/images/janna.png"
import Technology, {blockTechnology} from "../Components/Technology.tsx";
import Union from "../public/images/Union.svg"


const ProblemBlock:Block[] = [
    {
        id: "a",
        title: "Проблема отельного бизнеса",
        blockNum: "01"
    },
    {
        id: "b",
        title:"Высокая текучка кадров",
        content:"Частая смена сотрудников приводит к постоянным затратам времени и ресурсов на обучение новых работников, что влияет на качество обслуживания гостей"
    },
    {
        id: "c",
        title:"Высокий уровень стресса"
    },
    {
        id: "d",
        title: "Чрезмерная многозадачность"
    },
    {
        id: "e",
        title: "Дефицит времени"
    },
    {
        id: "f",
        title: "Большие очереди"
    }
];
const desicionProblemBlock:Block[] = [
    {
        id: "a",
        title:"Решение проблемы",
        blockNum:"02",
        backgroundImage:janna
    },
    {
        id:"b",
        title:"Робот-администратор способен:",
        content:(
            <ul>
                <li>Распознавать лица</li>
                <li>Бронировать номера</li>
                <li>Вести диалог</li>
                <li>Рекомендовать рестораны</li>
                <li>Вести навигацию внутри помещения</li>
                <li>Рекомендовать места в городе</li>
            </ul>
        )
    }
]

const technologyBlock:blockTechnology[] = [
    {
        id:"a",
        title:"Анализ больших данных",
        content:(<>Приложение способно принимать <br/>
            и обрабатывать внушительные потоки <br/> информации с <b>минимальной задержкой</b></>),
        image:Union,
    },
    {
        id:"b",
        title:"Машинное зрение",
        content:(<>Позволяет сканировать содержимое <br/> вложений в письмах и на основе ключевых <br/> фраз обеспечивать <b>удобную сортировку</b></>),
        image:Union,
    },{
        id:"c",
        title:"Искусственный интеллект",
        content:(<>Обеспечивает <b>точность</b> и <b>автономность</b> <br/>производимой сортировки</>),
        image:Union,
    },
    {
        id:"d",
        title:(<>Отсутствие подобных <br/>решений на рынке</>),
        image:Union,
    }
]

export default function Janna(){
    return(
        <main className="Janna">
            <h2>Жанна</h2>
            <div className="Janna__numAndLine">
                <div></div>
                <p>03</p>
            </div>
            <p className="p1">Робот-администратор</p>
            <Infoblock blocks={ProblemBlock} color="white" backgroundColor="#292929"/>
            <Infoblock blocks={desicionProblemBlock} color="white" backgroundColor="#6254e6"
                       backgroundColorBlock="#292929"/>
            <h2>Технологии</h2>
            <Technology blocks={technologyBlock} className="Technology"/>
        </main>
    )
}