import Infoblock, {Block} from "../Components/Infoblock.tsx";
import Union from "../public/images/Union.svg"


const problemBlock:Block[] = [
    {
        id: "a",
        title: "Проблема",
        content: `Медленные разбор и систематизация файлов, вероятность ошибки и потери файлов за счет человеческого фактора, недопустимые в работе аудиторских компаний и других предприятий, постоянно работающих с большим обьемом входящих документов финансовой отчетности.`,
        blockNum: "01"
    },
    {
        id: "b",
        title: "14 - 16 дней",
        content: "Аудиторских работ"
    },
    {
        id: "c",
        title: "10%",
        content: "Человеческий фактор (вероятность ошибки)"
    },
    {
        id: "d",
        title: "10 - 12 часов",
        content: "Времени обработки информации"
    },
    {
        id: "e",
        title: "30 - 40 тыс. руб",
        content: "Затраты на сортировку"
    }
]
const decisionBlock:Block[] = [
    {
        id:"a",
        title:"Решение проблемы",
        content:"Приложение автоматически скачивает полученные документы (docx, pdf, excel, jpg, rtf), с помощью машинного зрения «читает» документ и, на основе прописанных тегов, сортирует файлы по настраиваемым папкам на ПК пользователя.",
        blockNum: "02"
    },
    {
        id:"b",
        content:(
            <>
                Разработанный алгоритм дает возможность <b>исключить</b> вероятность <b>ошибки</b> при сортировке документов до 4%.
            </>
        )
    },
    {
        id:"c",
        content:(
            <>
                Приложение значительно <b>облегчает</b>
                и <b>ускоряет</b> работу с документами, позволяя сотруднику сосредоточиться
                на других рабочих задачах.
            </>
        )
    }
]


export default function Triager() {
    return(
        <main className="Triager">
            <h2>Triager</h2>
            <p className="p1">Веб-приложение для сортировки и обработки входящих файлов с использованием разработанного алгоритма на базе <b>искусственного интеллекта и машинного зрения.</b></p>
            <Infoblock blocks={problemBlock} backgroundColor="#292929" color ="white" />
            <Infoblock blocks={decisionBlock} backgroundColor="#6254e6" color ="white" backgroundColorBlock="#292929"/>
            <div className="Triager__TechnologyBlock">
                <h2>Технологии</h2>
                <div className="Triager__TechnologyBlock__numAndLine">
                    <div></div>
                    <p>03</p>
                </div>
                <div className="Triager__TechnologyLeftRightBlock">
                    <div className="Triager__TechnologyBlock-left">
                        <div>
                            <img src={Union} alt=""/>
                            <p><b>в 4 раза</b><br/> сокращение времени обработки<br/> 100 входящих сообщений</p>
                        </div>
                        <div>
                            <img src={Union} alt=""/>
                            <p><b>до 6%</b><br/> снижение вероятности<br/> ошибочной сортировки</p>
                        </div>
                        <div>
                            <img src={Union} alt=""/>
                            <p><b>на 3-5 дней </b><br/>ускоряет процесс аудита</p>
                        </div>
                        <div>
                            <img src={Union} alt=""/>
                            <p><b>в 10 раз</b><br/> сокращение расходов <br/> на сортировку в месяц</p>
                        </div>
                    </div>
                    <div className="Triager__TechnologyBlock-right">
                        <div>
                            <h3>Анализ больших данных</h3>
                            <p>Приложение способно принимать <br/>и обрабатывать внушительные потоки <br/> информации
                                с <b>минимальной
                                    задержкой</b></p>
                        </div>
                        <div className="Triager__TechnologyBlock-right__underline"></div>
                        <div>
                            <h3>Искусственный интеллект</h3>
                            <p>Обеспечивает <b>точность</b> и <b>автономность</b> <br/>производимой сортировки</p>
                        </div>
                        <div className="Triager__TechnologyBlock-right__underline"></div>
                        <div>
                            <h3>Машинное зрение</h3>
                            <p>Позволяет сканировать содержимое <br/> вложений в письмах и на основе ключевых <br/> фраз
                                обеспечивать <b>удобную сортировку</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}