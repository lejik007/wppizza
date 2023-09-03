import cn from "./ChoosePizzaFilter.module.sass"
export default function ChoosePizzaFilter() {
    return (
        <div className={cn.ChoosePizzaFilter}>
            <a className={cn.ChoosePizzaFilterAll} href={""}>
                Все&nbsp;&nbsp;
            </a>
            <a className={cn.ChoosePizzaFilterSpicy} href={""}>
                Острые&nbsp;&nbsp;
            </a>
            <a className={cn.ChoosePizzaFilterMeat} href={""}>
                Мясные&nbsp;&nbsp;
            </a>
            <a className={cn.ChoosePizzaFilterCheese} href={""}>
                Сырные&nbsp;&nbsp;
            </a>
            <a className={cn.ChoosePizzaFilterVegan} href={""}>
                Веганские&nbsp;&nbsp;
            </a>
        </div>
    )
}