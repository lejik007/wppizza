import "./ChoosePizzaFilter.css"
export default function ChoosePizzaFilter() {
    return (
        <div className="ChoosePizzaFilter">
            <p className="ChoosePizzaFilterAll">
                Все
            </p>
            <p className="ChoosePizzaFilterSpicy">
                Острые
            </p>
            <p className="ChoosePizzaFilterMeat">
                Мясные
            </p>
            <p className="ChoosePizzaFilterCheese">
                Сырные
            </p>
            <p className="ChoosePizzaFilterVegan">
                Веганские
            </p>
        </div>
    )
}