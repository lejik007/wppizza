import cn from "./ChoosePizzaSamplesMatrix.module.sass";
import PizzaElement from "core/main/PizzaElement/PizzaElement";

export default function ChoosePizzaSamplesMatrix() {
    return (
        <div className={cn.ChoosePizzaSamplesMatrix}>
            <div className={cn.ChoosePizzaSamples}>
                <PizzaElement
                    pizzaName={"Итальянская"}
                    pizzaDescription={"Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик"}
                    pizzaPrice={"от 699 руб."}
                    pizzaPic={'/images/01.png'}
                />
                <PizzaElement
                    pizzaName={"Маргарита"}
                    pizzaDescription={"Тесто со шпинатом, молодой сыр и колбаски, много колбасок"}
                    pizzaPrice={"от 479 руб."}
                    pizzaPic={'/images/02.png'}
                />
                <PizzaElement
                    pizzaName={"Барбекю"}
                    pizzaDescription={"Циплёнок (маленький кура), оливки, моцарелла, соус барбекю"}
                    pizzaPrice={"от 699 руб."}
                    pizzaPic={'/images/03.png'}
                />
                <PizzaElement
                    pizzaName={"Вегетарианская"}
                    pizzaDescription={"Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик"}
                    pizzaPrice={"от 399 руб."}
                    pizzaPic={'/images/04.png'}
                />
                <PizzaElement
                    pizzaName={"Мясная"}
                    pizzaDescription={"Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик"}
                    pizzaPrice={"от 699 руб."}
                    pizzaPic={'/images/05.png'}
                />
                <PizzaElement
                    pizzaName={"Овощная"}
                    pizzaDescription={"Тесто со шпинатом, молодой сыр и колбаски, много колбасок"}
                    pizzaPrice={"от 479 руб."}
                    pizzaPic={'/images/06.png'}
                />
                <PizzaElement
                    pizzaName={"Римская"}
                    pizzaDescription={"Циплёнок (маленький кура), оливки, моцарелла, соус барбекю"}
                    pizzaPrice={"от 699 руб."}
                    pizzaPic={'/images/07.png'}
                />
                <PizzaElement
                    pizzaName={"С грибами"}
                    pizzaDescription={"Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик"}
                    pizzaPrice={"от 399 руб."}
                    pizzaPic={'/images/08.png'}
                />
                <PizzaElement
                    pizzaName={"Сырная"}
                    pizzaDescription={"Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик"}
                    pizzaPrice={"от 699 руб."}
                    pizzaPic={'/images/09.png'}
                />
                <PizzaElement
                    pizzaName={"Четыре сыра"}
                    pizzaDescription={"Тесто со шпинатом, молодой сыр и колбаски, много колбасок"}
                    pizzaPrice={"от 479 руб."}
                    pizzaPic={'/images/10.png'}
                />
                <PizzaElement
                    pizzaName={"Пепперони Фреш с томатами"}
                    pizzaDescription={"Циплёнок (маленький кура), оливки, моцарелла, соус барбекю"}
                    pizzaPrice={"от 699 руб."}
                    pizzaPic={'/images/11.png'}
                />
                <PizzaElement
                    pizzaName={"Ветчина и сыр"}
                    pizzaDescription={"Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик"}
                    pizzaPrice={"от 399 руб."}
                    pizzaPic={'/images/12.png'}
                />
            </div>
        </div>
    )
}