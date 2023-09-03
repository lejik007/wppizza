import cn from "./DeliveryAndPayPizzaSteps.module.sass";
import Delivery from "core/main/Delivery/Delivery";
export default function DeliveryAndPayPizzaSteps() {
    return(
        <div className={cn.DeliveryAndPayPizzaSteps}>
            <Delivery
                pic = "/images/svg/headset.svg"
                alt = "Наушники"
                caption = "Заказ"
                description = "После оформления заказа мы свяжемся с вами для уточнения деталей."
            />
            <Delivery
                pic = "/images/svg/scooter.svg"
                alt = "Мотороллер"
                caption = "Доставка курьером"
                description = "Мы доставим вашу пиццу горячей. Бесплатная доставка по городу."
            />
            <Delivery
                pic = "/images/svg/terminal.svg"
                alt = "Терминал"
                caption = "Оплата"
                description = "Оплатить можно наличными или картой курьеру. И золотом тоже можно."
            />
        </div>
    )
}