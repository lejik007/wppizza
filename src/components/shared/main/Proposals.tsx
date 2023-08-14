import "./Proposals.css"
import ProposalsLeft from "shared/main/main/ProposalsLeft";

export default function Proposals() {
    return (
        <div className="Proposals">
            <ProposalsLeft/>
            <div className="ProposalsCenter">
                <div className="ProposalsCenterImage">

                </div>
                <p className="ProposalsCaption">
                    Напиток в подарок
                </p>
                <p className="ProposalsDiscreption">
                    Скидка на заказ от 3 000 рублей + напиток в подарок
                </p>
            </div>
            <div className="ProposalsRight">
                <div className="ProposalsRightImage">

                </div>
                <p className="ProposalsCaption">
                    25% при первом заказе
                </p>
                <p className="ProposalsDiscreption">
                    Скидка новым клиентам!
                </p>
            </div>
        </div>
    )
}