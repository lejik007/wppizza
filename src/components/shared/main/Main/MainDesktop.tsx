import cn from "./MainDesktop.module.sass"
import PizzaForOrder from "shared/main/PizzaForOrder/PizzaForOrder";
import Proposals from "shared/main/Proposals/Proposals";
import ChoosePizza from "shared/main/ChoosePizza/ChoosePizza";
import DeliveryAndPayPizza from "shared/main/DeliveryAndPayPizza/DeliveryAndPayPizza";
import Promotion from "shared/main/Promotion/Promotion";
import FollowUs from "shared/main/FollowUs/FollowUs";

export default function MainDesktop() {
    return (
        <div className={cn.MainTablet}>
            <PizzaForOrder/>
            <Proposals/>
            <ChoosePizza/>
            <DeliveryAndPayPizza/>
            <Promotion/>
            <FollowUs/>
        </div>
    );
}

