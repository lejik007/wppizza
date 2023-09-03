import cn from './HeaderDesktop.module.sass'
import Logo from "core/header/Logo/PizzaLogo";
import Order from "shared/header/Order/Order";
import English from "core/header/English/English";
import Menu from "shared/header/MenuText/Menu";
import Phone from "shared/header/Phone/Phone";

export default function HeaderDesktop() {
    return (
        <div className={cn.HeaderDesktop}>
            <div className={cn.Container}>
                <Logo/>
                <Menu/>
                <Phone/>
                <Order/>
                <English/>
            </div>
        </div>
    );
}