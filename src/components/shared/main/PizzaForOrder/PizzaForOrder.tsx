import cn from "./PizzaForOrder.module.sass"
import PizzaOrderText from "shared/main/PizzaOrderText/PizzaOrderText";
import PizzaOrderPic from "shared/main/PizzaOrderPic/PizzaOrderPic";
export default function PizzaForOrder() {
    return (
        <div className={cn.PizzaForOrder}>
            <PizzaOrderText/>
            <PizzaOrderPic/>
        </div>
    )
}



