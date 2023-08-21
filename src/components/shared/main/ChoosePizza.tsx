import "./ChoosePizza.css"
import ChoosePizzaCaption from "shared/main/main/ChoosePizzaCaption";
import ChoosePizzaFilter from "shared/main/main/ChoosePizzaFilter";
import Italian from "shared/main/main/tmp/Italian";
import Margo from "shared/main/main/tmp/Margo";
import BBQ from "shared/main/main/tmp/BBQ";
import Vege from "shared/main/main/tmp/Vege";
import Meat from "shared/main/main/tmp/Meat";
import Vegetables from "shared/main/main/tmp/Vegetables";
import Rom from "shared/main/main/tmp/Rom";
import Mashrooms from "shared/main/main/tmp/Mashrooms";
import Cheese from "shared/main/main/tmp/Cheese";
import FourCheese from "shared/main/main/tmp/FourCheese";
import PepperoniTomato from "shared/main/main/tmp/PepperoniTomato";
import HamCheese from "shared/main/main/tmp/HamCheese";
import Index from "core/Pizza-Element";

export default function ChoosePizza() {
    return (
        <div className="ChoosePizza">
            <ChoosePizzaCaption/>
            <ChoosePizzaFilter/>
            <div className="ChoosePizzaSamplesMatrix">
                <div className="ChoosePizzaSamples">
                    <Index
                        pizzaName={"Итальянская"}
                        pizzaDescription={"Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик"}
                        pizzaPrice={"от 699 руб."}
                    />
                    <Index
                        pizzaName={"Маргарита"}
                        pizzaDescription={"Тесто со шпинатом, молодой сыр и колбаски, много колбасок"}
                        pizzaPrice={"от 479 руб."}
                    />
                    <Index
                        pizzaName={"Барбекю"}
                        pizzaDescription={"Циплёнок (маленький кура), оливки, моцарелла, соус барбекю"}
                        pizzaPrice={"от 699 руб."}
                    />
                    <Index
                        pizzaName={"Вегетарианская"}
                        pizzaDescription={"Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик"}
                        pizzaPrice={"от 399 руб."}
                    />
                    <Index
                        pizzaName={"Мясная"}
                        pizzaDescription={"Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик"}
                        pizzaPrice={"от 699 руб."}
                    />
                    <Index
                        pizzaName={"Овощная"}
                        pizzaDescription={"Тесто со шпинатом, молодой сыр и колбаски, много колбасок"}
                        pizzaPrice={"от 479 руб."}
                    />
                    <Index
                        pizzaName={"Римская"}
                        pizzaDescription={"Циплёнок (маленький кура), оливки, моцарелла, соус барбекю"}
                        pizzaPrice={"от 699 руб."}
                    />
                    <Index
                        pizzaName={"С грибами"}
                        pizzaDescription={"Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик"}
                        pizzaPrice={"от 399 руб."}
                    />
                    <Index
                        pizzaName={"Сырная"}
                        pizzaDescription={"Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик"}
                        pizzaPrice={"от 699 руб."}
                    />
                    <Index
                        pizzaName={"Четыре сыра"}
                        pizzaDescription={"Тесто со шпинатом, молодой сыр и колбаски, много колбасок"}
                        pizzaPrice={"от 479 руб."}
                    />
                    <Index
                        pizzaName={"Пепперони Фреш с томатами"}
                        pizzaDescription={"Циплёнок (маленький кура), оливки, моцарелла, соус барбекю"}
                        pizzaPrice={"от 699 руб."}
                    />
                    <Index
                        pizzaName={"Ветчина и сыр"}
                        pizzaDescription={"Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик"}
                        pizzaPrice={"от 399 руб."}
                    />
                </div>

            </div>
        </div>
    )
}