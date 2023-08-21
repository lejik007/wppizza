import "./ChoosePizzaFilter.css"
export default function ChoosePizzaFilter() {
    return (
        <div className="ChoosePizzaFilter">
            <a className="ChoosePizzaFilterAll">
                Все
            </a>
            <a className="ChoosePizzaFilterSpicy">
                Острые
            </a>
            <a className="ChoosePizzaFilterMeat">
                Мясные
            </a>
            <a className="ChoosePizzaFilterCheese">
                Сырные
            </a>
            <a className="ChoosePizzaFilterVegan">
                Веганские
            </a>
        </div>
    )
}