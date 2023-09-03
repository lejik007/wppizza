import cn from './Menu.module.sass'
import MenuText from "core/header/MenuText/MenuText";

export default function Menu() {
    return (
        <div className={cn.MenuTextContainer}>
            <MenuText menuButton = {"Меню"} />
            <MenuText menuButton = {"О нас"} />
            <MenuText menuButton = {"Контакты"} />
        </div>
    );
}

