import cn from "./PizzaOrderText.module.sass";

export default function PizzaOrderText() {
    return (
        <div className={cn.PizzaOrderText}>
            <p className={cn.PizzaOrderTextLabel}>
                Пицца на заказ
            </p>
            <p className={cn.PizzaOrderTextDescription}>
                Бесплатная и быстрая доставка за час<br/>
                в любое удобное для вас время
            </p>
            <button className={cn.PizzaOrderTextRect}>
                <p className={cn.PizzaOrderTextRectButtonCaption}>
                    Выбрать пиццу
                </p>
            </button>
        </div>
    )
}