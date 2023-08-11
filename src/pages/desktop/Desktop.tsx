import HeaderDesktop from "@/pages/desktop/comps/maincomps/header/HeaderDesktop";
import FooterDesktop from "@/pages/comps/shared/footer/FooterDesktop";
import MainDesktop from "@/pages/desktop/comps/maincomps/main/MainDesktop";

export default function Desktop() {
    return (
        <div className="Desktop">
            <HeaderDesktop />
            <MainDesktop />
            <FooterDesktop />
        </div>
    );
}