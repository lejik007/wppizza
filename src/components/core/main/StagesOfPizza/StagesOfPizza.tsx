import Image from "next/image";
import cn from './StagesOfPizza.module.sass'

export default function StagesOfPizza(props) {
    let pic = props.pic
    let caption = props.caption
    let description = props.description
    let middle = props.middle
    if (middle != "True") {
        middle = cn.Promotion
    } else {
        middle = cn.True
    }
    return (
        <div className={middle}>
            <div className={cn.PromotionPreparation}>
                <Image className={cn.PromotionPreparationFrame} src={pic} alt={"Приготовление"} height={100}
                       width={100}/>
                <Image className={cn.PromotionPreparationFrame} src={"/images/svg/promotion.svg"}
                       alt={"Обрамление"} height={100} width={100}/>
            </div>
            <div className={cn.PromotionPreparationText}>
                <p className={cn.PromotionPreparationTextCaption}>
                    {caption}
                </p>
                <p className={cn.PromotionPreparationTextDescription}>
                    {description}
                </p>
            </div>
        </div>
    )
}