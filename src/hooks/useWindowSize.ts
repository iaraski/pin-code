import { useState, useEffect } from "react";

function useWindowSize() {
    // Инициализируем состояние с текущими размерами окна
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        // Функция для обновления размеров окна
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // Добавляем слушатель события resize
        window.addEventListener("resize", handleResize);

        // Вызываем handleResize один раз при монтировании, чтобы получить начальные размеры
        handleResize();

        // Удаляем слушатель при размонтировании
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Пустой массив зависимостей гарантирует, что эффект выполнится только один раз

    return windowSize;
}

export default useWindowSize;