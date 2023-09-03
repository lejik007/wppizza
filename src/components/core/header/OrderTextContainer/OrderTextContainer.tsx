import cn from "./OrderTextContainer.module.sass";

export default function OrderTextContainer() {
    return(
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
    )
}