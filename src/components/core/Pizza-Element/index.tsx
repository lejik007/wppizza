import Image from "next/image";
import cn from "./styles.module.sass"

export default function Index(props) {
    let pizzaName = props.pizzaName
    let pizzaDescription = props.pizzaDescription
    let pizzaPrice = props.pizzaPrice
    return (

        <rect className={cn.choosePizza}>
            <div className={cn.choosePizzaSizeCirclesFrame}>
                <Image className={cn.choosePizzaPic} src={'/images/01.png'} alt='Фото пиццы' width={185} height={185}/>
            </div>
            <p className={cn.ChoosePizzaSamplesCaption}>
                {pizzaName}
            </p>
            <p className={cn.ChoosePizzaSamplesDescription}>
                {pizzaDescription}
            </p>
            <form>
                {/*<fieldset>*/}
                    <legend className={cn.ChoosePizzaSample}>Размер, см:</legend>
                    <div>
                        <input className={cn.ChoosePizzaSize} type="radio" id="Choice20" name="PizzaSize" value="20"/>
                        <label className={cn.ChoosePizzaSize} htmlFor="Choice20">20</label>

                        <input className={cn.ChoosePizzaSize} type="radio" id="Choice30" name="PizzaSize" value="30"/>
                        <label className={cn.ChoosePizzaSize} htmlFor="Choice30">30</label>

                        <input className={cn.ChoosePizzaSize} type="radio" id="Choice40" name="PizzaSize" value="40"/>
                        <label className={cn.ChoosePizzaSize} htmlFor="Choice40">40</label>
                    </div>
                {/*</fieldset>*/}
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