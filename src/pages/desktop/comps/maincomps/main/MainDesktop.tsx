import "./MainDesktop.css"
import PizzaForOrders from "@/pages/comps/shared/main/PizzaForOrder";
import Proposals from "@/pages/comps/shared/main/Proposals";
import ChoosePizza from "@/pages/comps/shared/main/ChoosePizza";
import DeliveryAndPayPizza from "@/pages/comps/shared/main/DeliveryAndPayPizza";
import Promotion from "@/pages/comps/shared/main/Promotion";
import FollowUs from "@/pages/comps/shared/main/FollowUs";

export default function MainDesktop() {
    return (
        <div className="MainDesktop">
            <PizzaForOrders/>
            <Proposals/>
            <ChoosePizza/>
            <DeliveryAndPayPizza/>
            <Promotion/>
            <FollowUs/>
        </div>
    );
}

