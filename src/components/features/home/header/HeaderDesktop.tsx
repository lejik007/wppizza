import cn from './HeaderDesktop.module.sass'
import Logo from "core/header/Logo/pizzaLogo";
import Order from "core/header/Order/Order";
import English from "core/header/English/English";
import MenuText from "core/header/MenuText/MenuText";
import Phone from "core/header/Phone/Phone";

export default function HeaderDesktop() {
    return (
        <div className={cn.HeaderDesktop}>
            <div className={cn.Container}>
                <Logo/>
                <MenuText/>
                <Phone/>
                <Order/>
                <English/>
            </div>
        </div>
    );
}