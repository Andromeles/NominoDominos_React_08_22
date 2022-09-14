import style from './Message.module.css'

export const Messages = (props) => {
    return <div className={style.test}>
        <div className={style.noneClass}>
            <ol>
                <li>Развернуть новый проект с использованием create-react-app.</li>
                <li>Создать компонент Message, отображающий переданный ему
                    пропсом текст.</li>
                <li>Изменить компонент App так, чтобы тот рендерил Message и
                    передавал ему пропсом текст(константу).</li>
                <li>Стилизовать компоненты через css(при желании можно
                    использовать less или sass).</li>
                <li>Установить расширение React Devtolis.</li>
                <li>Читаем документацию по react</li>
            </ol>
        </div>

        <hr />
        <p>{props.text}</p>
    </div>
}