import "./ChoosePizzaFilter.css"
export default function ChoosePizzaFilter() {
    return (
        <div className="ChoosePizzaFilter">
            <a className="ChoosePizzaFilterAll" href={""}>
                Все&nbsp;&nbsp;
            </a>
            <a className="ChoosePizzaFilterSpicy" href={""}>
                Острые&nbsp;&nbsp;
            </a>
            <a className="ChoosePizzaFilterMeat" href={""}>
                Мясные&nbsp;&nbsp;
            </a>
            <a className="ChoosePizzaFilterCheese" href={""}>
                Сырные&nbsp;&nbsp;
            </a>
            <a className="ChoosePizzaFilterVegan" href={""}>
                Веганские&nbsp;&nbsp;
            </a>
        </div>
    )
}