


export default function InfoblockProblem() {
    return (
        <div className="InfoblockProblem">
            <div className="InfoblockProblem__child InfoblockProblem__problem">
                <div className="InfoblockProblem__problem__lineAndNumber">
                    <div></div>
                    <p>01</p>
                </div>
                <div className="InfoblockProblem__problem__info">
                    <h3>Проблема</h3>
                    <p>Медленные разбор и систематизация файлов, вероятность ошибки и потери файлов за счет
                        человеческого
                        фактора, недопустимые в работе аудиторских компаний и других предприятий, постоянно работающих с
                        большим объемом входящих документов финансовой отчетности.
                    </p>
                </div>
            </div>
            <div className="InfoblockProblem__childs">
                <div className="InfoblockProblem__child InfoblockProblem__child_mini">
                    <div>
                        <h3>14 - 16 дней</h3>
                        <p>Аудиторских работ</p>
                    </div>
                </div>
                <div className="InfoblockProblem__child InfoblockProblem__child_mini">
                    <div>
                        <h3>10%</h3>
                        <p>Человеческий фактор (вероятность ошибки)</p>
                    </div>
                </div>
                <div className="InfoblockProblem__child InfoblockProblem__child_mini InfoblockProblem__child_mini__bottom">
                    <div>
                        <h3>10 - 12 часов</h3>
                        <p>Времени обработки информации</p>
                    </div>
                </div>
                <div className="InfoblockProblem__child InfoblockProblem__child_mini InfoblockProblem__child_mini__bottom">
                    <div>
                        <h3>30 - 40 тыс. руб.</h3>
                        <p>Затраты на сортировку</p>
                    </div>
                </div>
            </div>
        </div>
    )
}