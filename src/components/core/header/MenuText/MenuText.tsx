import cn from "./MenuText.module.sass";

export default function MenuText(props) {
    let menuButton = props.menuButton
    return (
        <div className={cn.MenuText}>
            <a href={""}>
                {menuButton}
            </a>
        </div>
    )
}