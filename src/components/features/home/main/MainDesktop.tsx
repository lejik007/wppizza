import "./MainDesktop.css"
import PizzaForOrders from "shared/main/PizzaForOrder";
import Proposals from "shared/main/Proposals";
import ChoosePizza from "shared/main/ChoosePizza";
import DeliveryAndPayPizza from "shared/main/DeliveryAndPayPizza";
import Promotion from "shared/main/Promotion";
import FollowUs from "shared/main/FollowUs";

export default function MainDesktop() {
    return (
        <div className="MainTablet">
            <PizzaForOrders/>
            <Proposals/>
            <ChoosePizza/>
            <DeliveryAndPayPizza/>
            <Promotion/>
            <FollowUs/>
        </div>
    );
}

