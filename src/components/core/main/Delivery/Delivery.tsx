import cn from "./Delivery.module.sass";
import Image from "next/image";
import Proposal from "core/main/Proposal/Proposal";

export default function Delivery(props) {
    let pic = props.pic
    let alt = props.alt
    let caption = props.caption
    let description = props.description
    return (
        //TODO: Передавать информацию о картинкак как было реализовано в фильтре пицц
        <div className={cn.DeliveryAndPayPizzaOrderDeliveryPay}>
            <Image src={pic} alt={alt} height={100} width={100}/>
            <div className={cn.DeliveryAndPayPizzaOrderDeliveryPayText}>
                <p className={cn.DeliveryAndPayPizzaOrderDeliveryPayTextHeader}>
                    {caption}
                </p>
                <p className={cn.DeliveryAndPayPizzaOrderDeliveryPayTextDescription}>
                    {description}
                </p>
            </div>
        </div>
    )
}

