import cn from "./PizzaOrderPic.module.sass";
import Image from "next/image";

export default function PizzaOrderPic() {
    return (
        <div className={cn.PizzaOrderPic}>
            <Image className={cn.PizzaOrderPicCuttingBoard} src={"/images/CuttingBoard.png"} alt={"Разделочная доска"} height={630} width={1314} />
            <Image className={cn.PizzaOrderPicLeaves} src={"/images/Leaves.png"} alt={"Листики"} height={603} width={303} />
            <Image className={cn.PizzaOrderPicPizza} src={"/images/Pizza.png"} alt={"Пицца"} height={600} width={630} />
        </div>
    )
}