import cn from "./DeliveryAndPayPizza.module.sass"
import DeliveryAndPayPizzaLabel from "core/main/DeliveryAndPayPizzaLabel/DeliveryAndPayPizzaLabel";
import DeliveryAndPayPizzaSteps from "shared/main/DeliveryAndPayPizzaSteps/DeliveryAndPayPizzaSteps";

export default function DeliveryAndPayPizza() {
    return (
        <div className={cn.DeliveryAndPayPizza}>
            <DeliveryAndPayPizzaLabel/>
            <DeliveryAndPayPizzaSteps/>
        </div>
    )
}









