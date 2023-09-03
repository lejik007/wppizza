import cn from "core/header/OrderPic/OrderPic.module.sass";
import Image from "next/image";

export default function OrderPic() {
    return (
        <div className={cn.OrderPic}>
            <div className={cn.OrderPicLogo}>
                <Image src={'/images/svg/pizza.svg'} alt='Фото пиццы' width={80} height={80}/>
            </div>
            <rect className={cn.OrderPicNumber}>
                <p className={cn.OrderNumber}>
                    3
                </p>
            </rect>
        </div>
    )
}