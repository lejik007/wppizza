import "./PizzaForOrder.css"
export default function PizzaForOrders() {
    return (
        <div className="PizzaForOrder">
            <div className="PizzaOrderText">
                <p className="PizzaOrderTextLabel">
                    Пицца на заказ
                </p>
                <p className="PizzaOrderTextDescription">
                    Бесплатная и быстрая доставка за час<br/>
                    в любое удобное для вас время
                </p>
                <div className="PizzaOrderTextRect">
                    <p className="PizzaOrderTextRectButtonCaption">
                        Выбрать пиццу
                    </p>
                </div>
            </div>
            <div className="PizzaOrderPic">
                <div className="PizzaOrderPicCuttingBoard">

                </div>
                <div className="PizzaOrderPicLeaves">

                </div>
                <div className="PizzaOrderPicPizza">

                </div>
            </div>
        </div>
    )
}