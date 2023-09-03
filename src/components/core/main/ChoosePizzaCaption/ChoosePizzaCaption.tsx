import cn from "./ChoosePizzaCaption.module.sass"
export default function ChoosePizzaCaption() {
    return (
        <div className={cn.ChoosePizzaCaption}>
            <p className={cn.ChoosePizzaCaptionText}>
                Выберите пиццу
            </p>
        </div>
    )
}