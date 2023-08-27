import cn from "./order.module.sass";
import OrderPic from "core/header/OrderPic/OrderPic";

export default function Order() {
    return (
        <div className={cn.Order}>
            <OrderPic/>
            <div className={cn.OrderTextContainer}>
                <div className={cn.OrderTextContainerCaption}>
                    <p>
                        Ваш заказ
                    </p>
                </div>
                <div className={cn.OrderTextContainerContain}>
                    <p>
                        Итальянская и ещё 2 пиццы
                    </p>
                </div>
            </div>
        </div>
    )
}
