import cn from './MenuText.module.sass'

export default function MenuText() {
    return (
            <div className={cn.MenuTextContainer}>
                <div className={cn.MenuTextMenu}>
                    <a href={""}>
                        Меню&nbsp;
                    </a>
                </div>
                <div className={cn.MenuTextAbout}>
                    <a href={""}>
                        О нас&nbsp;
                    </a>
                </div>
                <div className={cn.MenuTextContacts}>
                    <a href={""}>
                        Контакты&nbsp;
                    </a>
                </div>
            </div>
    );
}