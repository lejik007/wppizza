import cn from "./pizzaLogo.module.sass"
import Image from "next/image";

export default function PizzaLogo() {
    return (
        <div className={cn.Logo}>
            <Image src='/images/svg/pizzaLogo.svg' alt='Логотоп пиццы' width={100} height={100} />
        </div>
    )
}