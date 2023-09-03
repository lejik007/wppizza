import cn from "./Order.module.sass";
import OrderPic from "core/header/OrderPic/OrderPic";
import OrderTextContainer from "core/header/OrderTextContainer/OrderTextContainer";

export default function Order() {
    return (
        <div className={cn.Order}>
            <OrderPic/>
            <OrderTextContainer/>
        </div>
    )
}

