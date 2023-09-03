import cn from './FooterDesktop.module.sass'
import Image from "next/image";

export default function FooterDesktop() {
    return (
        <div className={cn.FooterDesktop}>
            <Image className={cn.PizzaLogoWhite} src={"/images/svg/pizzaLogoWhite.svg"} alt={"Логотоп пиццы"}
                   height={51.838} width={112.36}/>
            <div className={cn.FooterPhone}>
                <p className={cn.FooterPhoneNumber}>
                    +7 (918) 432-65-87
                </p>
                <p className={cn.FooterPhoneOperation}>
                    Ежедневно с 9:00 до 23:00
                </p>
            </div>
            <p className={cn.FooterPilicy}>
                Политика конфиденциальности
            </p>
        </div>
    );
}