import HeaderDesktop from "features/home/header/HeaderDesktop";
import FooterDesktop from "shared/footer";
import MainDesktop from "features/home/main/MainDesktop";

export default function Index() {
    return (
        <div className="Desktop">
            <HeaderDesktop />
            <MainDesktop />
            <FooterDesktop />
        </div>
    );
}