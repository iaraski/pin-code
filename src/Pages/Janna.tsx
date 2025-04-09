import Infoblock, {Block} from "../Components/Infoblock.tsx";
import janna from "../public/images/janna.png"
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
        title: "Дефцит времени"
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


export default function Janna(){
    return(
        <div className="Janna">
            <h2>Жанна</h2>
            <p className="p1">Робот-администратор</p>
            <Infoblock blocks={ProblemBlock} color="white" backgroundColor="#292929" />
            <Infoblock blocks={desicionProblemBlock} color="white" backgroundColor="#6254e6"  backgroundColorBlock="#292929"/>
        </div>
    )
}