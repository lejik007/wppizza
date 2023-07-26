import HeaderDesktop from "./comps/header/HeaderDesktop";
import FooterDesktop from "./comps/footer/FooterDesktop";
import MainDesktop from "./comps/main/MainDesktop";

export default function Desktop() {
    return (
        <div className="Desktop">
            <HeaderDesktop />
            <MainDesktop />
            <FooterDesktop />
        </div>
    );
}