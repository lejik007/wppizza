import cn from "./Proposals.module.sass"
import Proposal from "core/main/Proposal/Proposal";

export default function Proposals() {
    return (
        <div className={cn.Proposals}>
            <Proposal
                pic1 = "/images/ProposalLeftPizza.png"
                alt1 = "Большая пицца"
                height1 = {230}
                width1 = {260}
                pic2 = "/images/ProposalLeftPizzaMini.png"
                alt2 = "Малая пицца"
                height2 = {192}
                width2 = {179}
                caption = "Закажи 2 пиццы – 3-я в подарок"
                description = "При заказе 2-х больших пицц – средняя пицца в подарок"
                no = {300}
                left = "True"
            />
            <Proposal
                pic1 = "/images/ProposalCenter.png"
                alt1 = "Две кружки пива"
                height1 = {247}
                width1 = {416}
                caption = "Напиток в подарок"
                description = "Скидка на заказ от 3 000 рублей + напиток в подарок"
            />
            <Proposal
                pic1 = "/images/ProposalRight.png"
                alt1 = "Едят пиццу"
                height1 = {247}
                width1 = {416}
                caption = "25% при первом заказе"
                description = "Скидка новым клиентам!"
            />
        </div>
    )
}
