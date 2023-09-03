import cn from "./Promotion.module.sass"
import StagesOfPizza from "core/main/StagesOfPizza/StagesOfPizza";

export default function Promotion() {
    return (
        <div className={cn.Promotion}>
            <StagesOfPizza
                pic = {"/images/PromotionPreparation.png"}
                caption = {"Изготавливаем пиццу по своим рецептам в лучших традициях"}
                description = {"Наша пицца получается сочной, вкусной и главное хрустящей с нежной и аппетитной начинкой,\n" +
                    "                    готовим по своим итальянским рецептам"}
            />
            <StagesOfPizza
                pic = {"/images/PromotionIngradients.png"}
                caption = {"Используем только свежие ингридиенты"}
                description = {"Ежедневно заготавливаем продукты и овощи для наших пицц, соблюдаем все сроки хранения"}
                middle = "True"
            />
            <StagesOfPizza
                pic = {"/images/PromotionDelivery.png"}
                caption = {"Доставка в течение 60 минут или заказ за нас счёт"}
                description = {"Все наши курьеры – фанаты серии Need for Speed и призеры гонок World Rally Championship и World Superbike во всех категориях"}
            />
        </div>
    )
}