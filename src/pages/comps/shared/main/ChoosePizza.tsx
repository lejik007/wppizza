import "./ChoosePizza.css"
import ChoosePizzaCaption from "@/pages/core/main/ChoosePizzaCaption";
import ChoosePizzaFilter from "@/pages/core/main/ChoosePizzaFilter";
import Italian from "@/pages/core/main/Italian";
import Margo from "@/pages/core/main/Margo";
import BBQ from "@/pages/core/main/BBQ";
import Vege from "@/pages/core/main/Vege";
import Meat from "@/pages/core/main/Meat";
import Vegetables from "@/pages/core/main/Vegetables";
import Rom from "@/pages/core/main/Rom";
import Mashrooms from "@/pages/core/main/Mashrooms";
import Cheese from "@/pages/core/main/Cheese";
import FourCheese from "@/pages/core/main/FourCheese";
import PepperoniTomato from "@/pages/core/main/PepperoniTomato";
import HamCheese from "@/pages/core/main/HamCheese";

export default function ChoosePizza() {
    return (
        <div className="ChoosePizza">
            <ChoosePizzaCaption/>
            <ChoosePizzaFilter/>
            <div className="ChoosePizzaSamplesMatrix">
                <div className="ChoosePizzaSamples">
                    <Italian/>
                    <Margo/>
                    <BBQ/>
                    <Vege/>
                    <Meat/>
                    <Vegetables/>
                    <Rom/>
                    <Mashrooms/>
                    <Cheese/>
                    <FourCheese/>
                    <PepperoniTomato/>
                    <HamCheese/>
                </div>

            </div>
        </div>
    )
}