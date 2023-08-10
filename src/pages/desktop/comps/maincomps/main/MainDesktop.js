import "./MainDesktop.css"
import PizzaForOrders from "@/pages/desktop/comps/maincomps/main/comps/PizzaForOrder";
import Proposals from "@/pages/desktop/comps/maincomps/main/comps/Proposals";
import ChoosePizza from "@/pages/desktop/comps/maincomps/main/comps/ChoosePizza";
import DeliveryAndPayPizza from "@/pages/desktop/comps/maincomps/main/comps/DeliveryAndPayPizza";
import Promotion from "@/pages/desktop/comps/maincomps/main/comps/Promotion";
import FollowUs from "@/pages/desktop/comps/maincomps/main/comps/FollowUs";

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

