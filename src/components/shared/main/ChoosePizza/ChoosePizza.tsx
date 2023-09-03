import cn from "./ChoosePizza.module.sass"
import ChoosePizzaCaption from "core/main/ChoosePizzaCaption/ChoosePizzaCaption";
import ChoosePizzaFilter from "core/main/ChoosePizzaFilter/ChoosePizzaFilter";
import ChoosePizzaSamplesMatrix from "shared/main/ChoosePizzaSamplesMatrix/ChoosePizzaSamplesMatrix";

export default function ChoosePizza() {
    return (
        <div className={cn.ChoosePizza}>
            <ChoosePizzaCaption/>
            <ChoosePizzaFilter/>
            <ChoosePizzaSamplesMatrix/>
        </div>
    )
}