import "./ChoosePizza.css"
import ChoosePizzaCaption from "shared/main/main/ChoosePizzaCaption";
import ChoosePizzaFilter from "shared/main/main/ChoosePizzaFilter";
import PizzaElement from "core/main/PizzaElement/PizzaElement";

export default function ChoosePizza() {
    return (
        <div className="ChoosePizza">
            <ChoosePizzaCaption/>
            <ChoosePizzaFilter/>
            <div className="ChoosePizzaSamplesMatrix">
                <div className="ChoosePizzaSamples">
                    <PizzaElement
                        pizzaName={"Итальянская"}
                        pizzaDescription={"Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик"}
                        pizzaPrice={"от 699 руб."}
                    />
                    <PizzaElement
                        pizzaName={"Маргарита"}
                        pizzaDescription={"Тесто со шпинатом, молодой сыр и колбаски, много колбасок"}
                        pizzaPrice={"от 479 руб."}
                    />
                    <PizzaElement
                        pizzaName={"Барбекю"}
                        pizzaDescription={"Циплёнок (маленький кура), оливки, моцарелла, соус барбекю"}
                        pizzaPrice={"от 699 руб."}
                    />
                    <PizzaElement
                        pizzaName={"Вегетарианская"}
                        pizzaDescription={"Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик"}
                        pizzaPrice={"от 399 руб."}
                    />
                    <PizzaElement
                        pizzaName={"Мясная"}
                        pizzaDescription={"Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик"}
                        pizzaPrice={"от 699 руб."}
                    />
                    <PizzaElement
                        pizzaName={"Овощная"}
                        pizzaDescription={"Тесто со шпинатом, молодой сыр и колбаски, много колбасок"}
                        pizzaPrice={"от 479 руб."}
                    />
                    <PizzaElement
                        pizzaName={"Римская"}
                        pizzaDescription={"Циплёнок (маленький кура), оливки, моцарелла, соус барбекю"}
                        pizzaPrice={"от 699 руб."}
                    />
                    <PizzaElement
                        pizzaName={"С грибами"}
                        pizzaDescription={"Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик"}
                        pizzaPrice={"от 399 руб."}
                    />
                    <PizzaElement
                        pizzaName={"Сырная"}
                        pizzaDescription={"Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик"}
                        pizzaPrice={"от 699 руб."}
                    />
                    <PizzaElement
                        pizzaName={"Четыре сыра"}
                        pizzaDescription={"Тесто со шпинатом, молодой сыр и колбаски, много колбасок"}
                        pizzaPrice={"от 479 руб."}
                    />
                    <PizzaElement
                        pizzaName={"Пепперони Фреш с томатами"}
                        pizzaDescription={"Циплёнок (маленький кура), оливки, моцарелла, соус барбекю"}
                        pizzaPrice={"от 699 руб."}
                    />
                    <PizzaElement
                        pizzaName={"Ветчина и сыр"}
                        pizzaDescription={"Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик"}
                        pizzaPrice={"от 399 руб."}
                    />
                </div>

            </div>
        </div>
    )
}