import Image from "next/image";
import cn from "./pizza-element.module.sass"

export default function PizzaElement(props) {
    let pizzaName = props.pizzaName
    let pizzaDescription = props.pizzaDescription
    let pizzaPrice = props.pizzaPrice
    let pizzaPic = props.pizzaPic
    const SIZE = 185
    let pizzaSize = SIZE
    return (
        <rect className={cn.choosePizza}>
            <div className={cn.choosePizzaSizeCirclesFrame}>
                <Image className={cn.choosePizzaPic} src={pizzaPic} alt='Фото пиццы' width={pizzaSize} height={pizzaSize}/>
            </div>
            <p className={cn.ChoosePizzaSamplesCaption}>
                {pizzaName}
            </p>
            <p className={cn.ChoosePizzaSamplesDescription}>
                {pizzaDescription}
            </p>
            <form>
                <legend className={cn.ChoosePizzaSample}>Размер, см:</legend>
                <div>
                    <input className={cn.ChoosePizzaSize} type="radio" id="Choice20" name="PizzaSize" value="20"/>
                    <label className={cn.ChoosePizzaSize} htmlFor="Choice20">20</label>

                    <input className={cn.ChoosePizzaSize} type="radio" id="Choice30" name="PizzaSize" value="30"/>
                    <label className={cn.ChoosePizzaSize} htmlFor="Choice30">30</label>

                    <input className={cn.ChoosePizzaSize} type="radio" id="Choice40" name="PizzaSize" value="40"/>
                    <label className={cn.ChoosePizzaSize} htmlFor="Choice40">40</label>
                </div>
            </form>
            <p className={cn.ChoosePizzaSamplesPrice}>
                {pizzaPrice}
            </p>
            <button className={cn.ChoosePizzaSamplesButton}>
                <p className={cn.ChoosePizzaSamplesButtonCaption}>
                    Заказать
                </p>
            </button>
        </rect>
    )
}