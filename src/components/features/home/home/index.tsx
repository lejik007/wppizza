import HeaderDesktop from "shared/header/Header/HeaderDesktop";
import FooterDesktop from "core/Footer/FooterDesktop";
import MainDesktop from "shared/main/Main/MainDesktop";
import cn from "./index.module.sass"
export default function Index() {
    return (
        <div className={cn.Desktop}>
            <HeaderDesktop />
            <MainDesktop />
            <FooterDesktop />
        </div>
    );
}