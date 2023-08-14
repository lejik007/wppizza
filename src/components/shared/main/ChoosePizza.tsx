import "./ChoosePizza.css"
import ChoosePizzaCaption from "shared/main/main/ChoosePizzaCaption";
import ChoosePizzaFilter from "shared/main/main/ChoosePizzaFilter";
import Italian from "shared/main/main/Italian";
import Margo from "shared/main/main/Margo";
import BBQ from "shared/main/main/BBQ";
import Vege from "shared/main/main/Vege";
import Meat from "shared/main/main/Meat";
import Vegetables from "shared/main/main/Vegetables";
import Rom from "shared/main/main/Rom";
import Mashrooms from "shared/main/main/Mashrooms";
import Cheese from "shared/main/main/Cheese";
import FourCheese from "shared/main/main/FourCheese";
import PepperoniTomato from "shared/main/main/PepperoniTomato";
import HamCheese from "shared/main/main/HamCheese";

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