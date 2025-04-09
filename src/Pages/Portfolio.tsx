import HorizontalCard from "../Components/HorizontalCard.tsx";
import triagerbg from "../public/images/treagerbg.png"
import jannabg from "../public/images/jannabg.png"
import kastelbg from "../public/images/kastelbg.png"
import Connection from "../Components/Connection.tsx";

export default function Portfolio() {
    return(
        <div className="Portfolio">
            <h2>Наше портфолио</h2>
            <p className="p_center">Предлагаем услуги по веб-дизайну, разработке, созданию веб-приложений и электронной коммерции для ваших потребностей. Узнайте о нашем опыте.</p>
            <HorizontalCard
                heading="“Triager”"
                text="Веб-приложение для сортировки и обработки входящих файлов"
                bgImage={triagerbg}
                link="/triager"
            />
            <HorizontalCard
                heading="“Жанна”"
                text="Робот-администратор"
                bgImage={jannabg}
                link="/janna"
            />
            <HorizontalCard
                heading="“Кастель”"
                text="Туристическая онлайн-платформа"
                bgImage={kastelbg}
                link="/kastel"
            />
            <Connection/>
        </div>
    )
}