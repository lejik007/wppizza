import "./ChoosePizza.css"
import ChoosePizzaCaption from "@/pages/core/main/ChoosePizzaCaption";
import ChoosePizzaFilter from "@/pages/core/main/ChoosePizzaFilter";
import Italian from "@/pages/core/main/Italian";
import Margo from "@/pages/core/main/Margo";
import BBQ from "@/pages/core/main/BBQ";
import Vege from "@/pages/core/main/Vege";
import Meat from "@/pages/core/main/Meat";
import Vegetables from "@/pages/core/main/Vegetables";
import Rom from "@/pages/core/main/Rom";
import Mashrooms from "@/pages/core/main/Mashrooms";
import Cheese from "@/pages/core/main/Cheese";
import FourCheese from "@/pages/core/main/FourCheese";
import PepperoniTomato from "@/pages/core/main/PepperoniTomato";
import HamCheese from "@/pages/core/main/HamCheese";

export default function ChoosePizza() {
    return (
        <div className="ChoosePizza">
            <ChoosePizzaCaption/>
            {/*<div className="ChoosePizzaCaption">*/}
            {/*    <p className="ChoosePizzaCaptionText">*/}
            {/*        Выберите пиццу*/}
            {/*    </p>*/}
            {/*</div>*/}
            <ChoosePizzaFilter/>
            {/*<div className="ChoosePizzaFilter">*/}
            {/*    <p className="ChoosePizzaFilterAll">*/}
            {/*        Все*/}
            {/*    </p>*/}
            {/*    <p className="ChoosePizzaFilterSpicy">*/}
            {/*        Острые*/}
            {/*    </p>*/}
            {/*    <p className="ChoosePizzaFilterMeat">*/}
            {/*        Мясные*/}
            {/*    </p>*/}
            {/*    <p className="ChoosePizzaFilterCheese">*/}
            {/*        Сырные*/}
            {/*    </p>*/}
            {/*    <p className="ChoosePizzaFilterVegan">*/}
            {/*        Веганские*/}
            {/*    </p>*/}
            {/*</div>*/}
            <div className="ChoosePizzaSamplesMatrix">
                <div className="ChoosePizzaSamples">
                    <Italian/>
                    <Margo/>
                    <BBQ/>
                    <Vege/>
                    <Meat/>
                    <Vegetables/>
                    <Rom/>
                    <Mashrooms/>
                    <Cheese/>
                    <FourCheese/>
                    <PepperoniTomato/>
                    <HamCheese/>
                    {/*<div className="ChoosePizzaSample">*/}
                    {/*    <rect className="ChoosePizzaSamplesTopInside">*/}
                    {/*        <svg className="ChoosePizzaSamplesTopInsideCircles"*/}
                    {/*             xmlns="http://www.w3.org/2000/svg" width="202" height="202" viewBox="0 0 202 202"*/}
                    {/*             fill="none">*/}
                    {/*            <circle cx="101" cy="101" r="100" stroke="#DCDFE2" stroke-dasharray="4"/>*/}
                    {/*            <circle cx="101" cy="101" r="85" stroke="#DCDFE2" stroke-width="0.85"*/}
                    {/*                    stroke-dasharray="3.4"/>*/}
                    {/*            <circle cx="101" cy="101" r="70" stroke="#DCDFE2" stroke-width="0.7"*/}
                    {/*                    stroke-dasharray="2.8"/>*/}
                    {/*        </svg>*/}
                    {/*        <div className="ChoosePizzaSamplesTopInsideSVG">*/}
                    {/*            <div className="ChoosePizzaSamplesTopInsideSVGPizza" id="Pizza01">*/}
                                    {/*<Image*/}
                                    {/*    src={Pizza1}*/}
                                    {/*    width={500}*/}
                                    {/*    height={500}*/}
                                    {/*    alt="Picture of the author"*/}
                                    {/*/>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </rect>*/}
                    {/*    <p className="ChoosePizzaSamplesCaption">*/}
                    {/*        Итальянская*/}
                    {/*    </p>*/}
                    {/*    <p className="ChoosePizzaSamplesDescription">*/}
                    {/*        Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик*/}
                    {/*    </p>*/}
                    {/*    <div className="ChoosePizzaSamplesSize">*/}
                    {/*        <div className="ChoosePizzaSamplesSizeCaption">*/}

                    {/*        </div>*/}
                    {/*        <div className="ChoosePizzaSamplesSizeChoose">*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseGray">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextGray">*/}
                    {/*                    20*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseWhite">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextBlack">*/}
                    {/*                    30*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseGray">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextGray">*/}
                    {/*                    40*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <p className="ChoosePizzaSamplesPrice">*/}
                    {/*        от 699 руб.*/}
                    {/*    </p>*/}
                    {/*    <div className="ChoosePizzaSamplesButton">*/}
                    {/*        <p className="ChoosePizzaSamplesButtonCaption">*/}
                    {/*            Заказать*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="ChoosePizzaSample">*/}
                    {/*    <rect className="ChoosePizzaSamplesTopInside">*/}
                    {/*        <svg className="ChoosePizzaSamplesTopInsideCircles"*/}
                    {/*             xmlns="http://www.w3.org/2000/svg" width="202" height="202" viewBox="0 0 202 202"*/}
                    {/*             fill="none">*/}
                    {/*            <circle cx="101" cy="101" r="100" stroke="#DCDFE2" stroke-dasharray="4"/>*/}
                    {/*            <circle cx="101" cy="101" r="85" stroke="#DCDFE2" stroke-width="0.85"*/}
                    {/*                    stroke-dasharray="3.4"/>*/}
                    {/*            <circle cx="101" cy="101" r="70" stroke="#DCDFE2" stroke-width="0.7"*/}
                    {/*                    stroke-dasharray="2.8"/>*/}
                    {/*        </svg>*/}
                    {/*        <div className="ChoosePizzaSamplesTopInsideSVG">*/}
                    {/*            <div className="ChoosePizzaSamplesTopInsideSVGPizza" id="Pizza02">*/}

                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </rect>*/}
                    {/*    <p className="ChoosePizzaSamplesCaption">*/}
                    {/*        Маргарита*/}
                    {/*    </p>*/}
                    {/*    <p className="ChoosePizzaSamplesDescription">*/}
                    {/*        Тесто со шпинатом, молодой сыр и колбаски, много колбасок*/}
                    {/*    </p>*/}
                    {/*    <div className="ChoosePizzaSamplesSize">*/}
                    {/*        <div className="ChoosePizzaSamplesSizeCaption">*/}

                    {/*        </div>*/}
                    {/*        <div className="ChoosePizzaSamplesSizeChoose">*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseGray">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextGray">*/}
                    {/*                    20*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseWhite" id="GrayButton">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextBlack" id="GrayText">*/}
                    {/*                    30*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseGray" id="WhiteButton">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextGray" id="BlackText">*/}
                    {/*                    40*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <p className="ChoosePizzaSamplesPrice">*/}
                    {/*        от 479 руб.*/}
                    {/*    </p>*/}
                    {/*    <div className="ChoosePizzaSamplesButton">*/}
                    {/*        <p className="ChoosePizzaSamplesButtonCaption">*/}
                    {/*            Заказать*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="ChoosePizzaSample">*/}
                    {/*    <rect className="ChoosePizzaSamplesTopInside">*/}
                    {/*        <svg className="ChoosePizzaSamplesTopInsideCircles"*/}
                    {/*             xmlns="http://www.w3.org/2000/svg" width="202" height="202" viewBox="0 0 202 202"*/}
                    {/*             fill="none">*/}
                    {/*            <circle cx="101" cy="101" r="100" stroke="#DCDFE2" stroke-dasharray="4"/>*/}
                    {/*            <circle cx="101" cy="101" r="85" stroke="#DCDFE2" stroke-width="0.85"*/}
                    {/*                    stroke-dasharray="3.4"/>*/}
                    {/*            <circle cx="101" cy="101" r="70" stroke="#DCDFE2" stroke-width="0.7"*/}
                    {/*                    stroke-dasharray="2.8"/>*/}
                    {/*        </svg>*/}
                    {/*        <div className="ChoosePizzaSamplesTopInsideSVG">*/}
                    {/*            <div className="ChoosePizzaSamplesTopInsideSVGPizza" id="Pizza03">*/}

                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </rect>*/}
                    {/*    <p className="ChoosePizzaSamplesCaption">*/}
                    {/*        Барбекю*/}
                    {/*    </p>*/}
                    {/*    <p className="ChoosePizzaSamplesDescription">*/}
                    {/*        Циплёнок (маленький кура), оливки, моцарелла, соус барбекю*/}
                    {/*    </p>*/}
                    {/*    <div className="ChoosePizzaSamplesSize">*/}
                    {/*        <div className="ChoosePizzaSamplesSizeCaption">*/}

                    {/*        </div>*/}
                    {/*        <div className="ChoosePizzaSamplesSizeChoose">*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseGray">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextGray">*/}
                    {/*                    20*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseWhite">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextBlack">*/}
                    {/*                    30*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseGray">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextGray">*/}
                    {/*                    40*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <p className="ChoosePizzaSamplesPrice">*/}
                    {/*        от 699 руб.*/}
                    {/*    </p>*/}
                    {/*    <div className="ChoosePizzaSamplesButton">*/}
                    {/*        <p className="ChoosePizzaSamplesButtonCaption">*/}
                    {/*            Заказать*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="ChoosePizzaSample">*/}
                    {/*    <rect className="ChoosePizzaSamplesTopInside">*/}
                    {/*        <svg className="ChoosePizzaSamplesTopInsideCircles"*/}
                    {/*             xmlns="http://www.w3.org/2000/svg" width="202" height="202" viewBox="0 0 202 202"*/}
                    {/*             fill="none">*/}
                    {/*            <circle cx="101" cy="101" r="100" stroke="#DCDFE2" stroke-dasharray="4"/>*/}
                    {/*            <circle cx="101" cy="101" r="85" stroke="#DCDFE2" stroke-width="0.85"*/}
                    {/*                    stroke-dasharray="3.4"/>*/}
                    {/*            <circle cx="101" cy="101" r="70" stroke="#DCDFE2" stroke-width="0.7"*/}
                    {/*                    stroke-dasharray="2.8"/>*/}
                    {/*        </svg>*/}
                    {/*        <div className="ChoosePizzaSamplesTopInsideSVG">*/}
                    {/*            <div className="ChoosePizzaSamplesTopInsideSVGPizza" id="Pizza04">*/}

                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </rect>*/}
                    {/*    <p className="ChoosePizzaSamplesCaption">*/}
                    {/*        Вегетарианская*/}
                    {/*    </p>*/}
                    {/*    <p className="ChoosePizzaSamplesDescription">*/}
                    {/*        Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик*/}
                    {/*    </p>*/}
                    {/*    <div className="ChoosePizzaSamplesSize">*/}
                    {/*        <div className="ChoosePizzaSamplesSizeCaption">*/}

                    {/*        </div>*/}
                    {/*        <div className="ChoosePizzaSamplesSizeChoose">*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseGray" id="WhiteButton">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextGray" id="BlackText">*/}
                    {/*                    20*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseWhite" id="GrayButton">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextBlack" id="GrayText">*/}
                    {/*                    30*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseGray">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextGray">*/}
                    {/*                    40*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <p className="ChoosePizzaSamplesPrice">*/}
                    {/*        от 399 руб.*/}
                    {/*    </p>*/}
                    {/*    <div className="ChoosePizzaSamplesButton">*/}
                    {/*        <p className="ChoosePizzaSamplesButtonCaption">*/}
                    {/*            Заказать*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="ChoosePizzaSample">*/}
                    {/*    <rect className="ChoosePizzaSamplesTopInside">*/}
                    {/*        <svg className="ChoosePizzaSamplesTopInsideCircles"*/}
                    {/*             xmlns="http://www.w3.org/2000/svg" width="202" height="202" viewBox="0 0 202 202"*/}
                    {/*             fill="none">*/}
                    {/*            <circle cx="101" cy="101" r="100" stroke="#DCDFE2" stroke-dasharray="4"/>*/}
                    {/*            <circle cx="101" cy="101" r="85" stroke="#DCDFE2" stroke-width="0.85"*/}
                    {/*                    stroke-dasharray="3.4"/>*/}
                    {/*            <circle cx="101" cy="101" r="70" stroke="#DCDFE2" stroke-width="0.7"*/}
                    {/*                    stroke-dasharray="2.8"/>*/}
                    {/*        </svg>*/}
                    {/*        <div className="ChoosePizzaSamplesTopInsideSVG">*/}
                    {/*            <div className="ChoosePizzaSamplesTopInsideSVGPizza" id="Pizza05">*/}

                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </rect>*/}
                    {/*    <p className="ChoosePizzaSamplesCaption">*/}
                    {/*        Мясная*/}
                    {/*    </p>*/}
                    {/*    <p className="ChoosePizzaSamplesDescription">*/}
                    {/*        Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик*/}
                    {/*    </p>*/}
                    {/*    <div className="ChoosePizzaSamplesSize">*/}
                    {/*        <div className="ChoosePizzaSamplesSizeCaption">*/}

                    {/*        </div>*/}
                    {/*        <div className="ChoosePizzaSamplesSizeChoose">*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseGray">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextGray">*/}
                    {/*                    20*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseWhite">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextBlack">*/}
                    {/*                    30*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseGray">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextGray">*/}
                    {/*                    40*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <p className="ChoosePizzaSamplesPrice">*/}
                    {/*        от 699 руб.*/}
                    {/*    </p>*/}
                    {/*    <div className="ChoosePizzaSamplesButton">*/}
                    {/*        <p className="ChoosePizzaSamplesButtonCaption">*/}
                    {/*            Заказать*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="ChoosePizzaSample">*/}
                    {/*    <rect className="ChoosePizzaSamplesTopInside">*/}
                    {/*        <svg className="ChoosePizzaSamplesTopInsideCircles"*/}
                    {/*             xmlns="http://www.w3.org/2000/svg" width="202" height="202" viewBox="0 0 202 202"*/}
                    {/*             fill="none">*/}
                    {/*            <circle cx="101" cy="101" r="100" stroke="#DCDFE2" stroke-dasharray="4"/>*/}
                    {/*            <circle cx="101" cy="101" r="85" stroke="#DCDFE2" stroke-width="0.85"*/}
                    {/*                    stroke-dasharray="3.4"/>*/}
                    {/*            <circle cx="101" cy="101" r="70" stroke="#DCDFE2" stroke-width="0.7"*/}
                    {/*                    stroke-dasharray="2.8"/>*/}
                    {/*        </svg>*/}
                    {/*        <div className="ChoosePizzaSamplesTopInsideSVG">*/}
                    {/*            <div className="ChoosePizzaSamplesTopInsideSVGPizza" id="Pizza06">*/}

                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </rect>*/}
                    {/*    <p className="ChoosePizzaSamplesCaption">*/}
                    {/*        Овощная*/}
                    {/*    </p>*/}
                    {/*    <p className="ChoosePizzaSamplesDescription">*/}
                    {/*        Тесто со шпинатом, молодой сыр и колбаски, много колбасок*/}
                    {/*    </p>*/}
                    {/*    <div className="ChoosePizzaSamplesSize">*/}
                    {/*        <div className="ChoosePizzaSamplesSizeCaption">*/}

                    {/*        </div>*/}
                    {/*        <div className="ChoosePizzaSamplesSizeChoose">*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseGray">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextGray">*/}
                    {/*                    20*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseWhite">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextBlack">*/}
                    {/*                    30*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseGray">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextGray">*/}
                    {/*                    40*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <p className="ChoosePizzaSamplesPrice">*/}
                    {/*        от 479 руб.*/}
                    {/*    </p>*/}
                    {/*    <div className="ChoosePizzaSamplesButton">*/}
                    {/*        <p className="ChoosePizzaSamplesButtonCaption">*/}
                    {/*            Заказать*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="ChoosePizzaSample">*/}
                    {/*    <rect className="ChoosePizzaSamplesTopInside">*/}
                    {/*        <svg className="ChoosePizzaSamplesTopInsideCircles"*/}
                    {/*             xmlns="http://www.w3.org/2000/svg" width="202" height="202" viewBox="0 0 202 202"*/}
                    {/*             fill="none">*/}
                    {/*            <circle cx="101" cy="101" r="100" stroke="#DCDFE2" stroke-dasharray="4"/>*/}
                    {/*            <circle cx="101" cy="101" r="85" stroke="#DCDFE2" stroke-width="0.85"*/}
                    {/*                    stroke-dasharray="3.4"/>*/}
                    {/*            <circle cx="101" cy="101" r="70" stroke="#DCDFE2" stroke-width="0.7"*/}
                    {/*                    stroke-dasharray="2.8"/>*/}
                    {/*        </svg>*/}
                    {/*        <div className="ChoosePizzaSamplesTopInsideSVG">*/}
                    {/*            <div className="ChoosePizzaSamplesTopInsideSVGPizza" id="Pizza07">*/}

                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </rect>*/}
                    {/*    <p className="ChoosePizzaSamplesCaption">*/}
                    {/*        Римская*/}
                    {/*    </p>*/}
                    {/*    <p className="ChoosePizzaSamplesDescription">*/}
                    {/*        Циплёнок (маленький кура), оливки, моцарелла, соус барбекю*/}
                    {/*    </p>*/}
                    {/*    <div className="ChoosePizzaSamplesSize">*/}
                    {/*        <div className="ChoosePizzaSamplesSizeCaption">*/}

                    {/*        </div>*/}
                    {/*        <div className="ChoosePizzaSamplesSizeChoose">*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseGray">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextGray">*/}
                    {/*                    20*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseWhite">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextBlack">*/}
                    {/*                    30*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseGray">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextGray">*/}
                    {/*                    40*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <p className="ChoosePizzaSamplesPrice">*/}
                    {/*        от 699 руб.*/}
                    {/*    </p>*/}
                    {/*    <div className="ChoosePizzaSamplesButton">*/}
                    {/*        <p className="ChoosePizzaSamplesButtonCaption">*/}
                    {/*            Заказать*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="ChoosePizzaSample">*/}
                    {/*    <rect className="ChoosePizzaSamplesTopInside">*/}
                    {/*        <svg className="ChoosePizzaSamplesTopInsideCircles"*/}
                    {/*             xmlns="http://www.w3.org/2000/svg" width="202" height="202" viewBox="0 0 202 202"*/}
                    {/*             fill="none">*/}
                    {/*            <circle cx="101" cy="101" r="100" stroke="#DCDFE2" stroke-dasharray="4"/>*/}
                    {/*            <circle cx="101" cy="101" r="85" stroke="#DCDFE2" stroke-width="0.85"*/}
                    {/*                    stroke-dasharray="3.4"/>*/}
                    {/*            <circle cx="101" cy="101" r="70" stroke="#DCDFE2" stroke-width="0.7"*/}
                    {/*                    stroke-dasharray="2.8"/>*/}
                    {/*        </svg>*/}
                    {/*        <div className="ChoosePizzaSamplesTopInsideSVG">*/}
                    {/*            <div className="ChoosePizzaSamplesTopInsideSVGPizza" id="Pizza08">*/}

                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </rect>*/}
                    {/*    <p className="ChoosePizzaSamplesCaption">*/}
                    {/*        С грибами*/}
                    {/*    </p>*/}
                    {/*    <p className="ChoosePizzaSamplesDescription">*/}
                    {/*        Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик*/}
                    {/*    </p>*/}
                    {/*    <div className="ChoosePizzaSamplesSize">*/}
                    {/*        <div className="ChoosePizzaSamplesSizeCaption">*/}

                    {/*        </div>*/}
                    {/*        <div className="ChoosePizzaSamplesSizeChoose">*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseGray">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextGray">*/}
                    {/*                    20*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseWhite">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextBlack">*/}
                    {/*                    30*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseGray">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextGray">*/}
                    {/*                    40*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <p className="ChoosePizzaSamplesPrice">*/}
                    {/*        от 399 руб.*/}
                    {/*    </p>*/}
                    {/*    <div className="ChoosePizzaSamplesButton">*/}
                    {/*        <p className="ChoosePizzaSamplesButtonCaption">*/}
                    {/*            Заказать*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="ChoosePizzaSample">*/}
                    {/*    <rect className="ChoosePizzaSamplesTopInside">*/}
                    {/*        <svg className="ChoosePizzaSamplesTopInsideCircles"*/}
                    {/*             xmlns="http://www.w3.org/2000/svg" width="202" height="202" viewBox="0 0 202 202"*/}
                    {/*             fill="none">*/}
                    {/*            <circle cx="101" cy="101" r="100" stroke="#DCDFE2" stroke-dasharray="4"/>*/}
                    {/*            <circle cx="101" cy="101" r="85" stroke="#DCDFE2" stroke-width="0.85"*/}
                    {/*                    stroke-dasharray="3.4"/>*/}
                    {/*            <circle cx="101" cy="101" r="70" stroke="#DCDFE2" stroke-width="0.7"*/}
                    {/*                    stroke-dasharray="2.8"/>*/}
                    {/*        </svg>*/}
                    {/*        <div className="ChoosePizzaSamplesTopInsideSVG">*/}
                    {/*            <div className="ChoosePizzaSamplesTopInsideSVGPizza" id="Pizza09">*/}

                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </rect>*/}
                    {/*    <p className="ChoosePizzaSamplesCaption">*/}
                    {/*        Сырная*/}
                    {/*    </p>*/}
                    {/*    <p className="ChoosePizzaSamplesDescription">*/}
                    {/*        Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик*/}
                    {/*    </p>*/}
                    {/*    <div className="ChoosePizzaSamplesSize">*/}
                    {/*        <div className="ChoosePizzaSamplesSizeCaption">*/}

                    {/*        </div>*/}
                    {/*        <div className="ChoosePizzaSamplesSizeChoose">*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseGray">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextGray">*/}
                    {/*                    20*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseWhite">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextBlack">*/}
                    {/*                    30*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseGray">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextGray">*/}
                    {/*                    40*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <p className="ChoosePizzaSamplesPrice">*/}
                    {/*        от 699 руб.*/}
                    {/*    </p>*/}
                    {/*    <div className="ChoosePizzaSamplesButton">*/}
                    {/*        <p className="ChoosePizzaSamplesButtonCaption">*/}
                    {/*            Заказать*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="ChoosePizzaSample">*/}
                    {/*    <rect className="ChoosePizzaSamplesTopInside">*/}
                    {/*        <svg className="ChoosePizzaSamplesTopInsideCircles"*/}
                    {/*             xmlns="http://www.w3.org/2000/svg" width="202" height="202" viewBox="0 0 202 202"*/}
                    {/*             fill="none">*/}
                    {/*            <circle cx="101" cy="101" r="100" stroke="#DCDFE2" stroke-dasharray="4"/>*/}
                    {/*            <circle cx="101" cy="101" r="85" stroke="#DCDFE2" stroke-width="0.85"*/}
                    {/*                    stroke-dasharray="3.4"/>*/}
                    {/*            <circle cx="101" cy="101" r="70" stroke="#DCDFE2" stroke-width="0.7"*/}
                    {/*                    stroke-dasharray="2.8"/>*/}
                    {/*        </svg>*/}
                    {/*        <div className="ChoosePizzaSamplesTopInsideSVG">*/}
                    {/*            <div className="ChoosePizzaSamplesTopInsideSVGPizza" id="Pizza10">*/}

                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </rect>*/}
                    {/*    <p className="ChoosePizzaSamplesCaption">*/}
                    {/*        Четыре сыра*/}
                    {/*    </p>*/}
                    {/*    <p className="ChoosePizzaSamplesDescription">*/}
                    {/*        Тесто со шпинатом, молодой сыр и колбаски, много колбасок*/}
                    {/*    </p>*/}
                    {/*    <div className="ChoosePizzaSamplesSize">*/}
                    {/*        <div className="ChoosePizzaSamplesSizeCaption">*/}

                    {/*        </div>*/}
                    {/*        <div className="ChoosePizzaSamplesSizeChoose">*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseGray">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextGray">*/}
                    {/*                    20*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseWhite">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextBlack">*/}
                    {/*                    30*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseGray">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextGray">*/}
                    {/*                    40*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <p className="ChoosePizzaSamplesPrice">*/}
                    {/*        от 479 руб.*/}
                    {/*    </p>*/}
                    {/*    <div className="ChoosePizzaSamplesButton">*/}
                    {/*        <p className="ChoosePizzaSamplesButtonCaption">*/}
                    {/*            Заказать*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="ChoosePizzaSample">*/}
                    {/*    <rect className="ChoosePizzaSamplesTopInside">*/}
                    {/*        <svg className="ChoosePizzaSamplesTopInsideCircles"*/}
                    {/*             xmlns="http://www.w3.org/2000/svg" width="202" height="202" viewBox="0 0 202 202"*/}
                    {/*             fill="none">*/}
                    {/*            <circle cx="101" cy="101" r="100" stroke="#DCDFE2" stroke-dasharray="4"/>*/}
                    {/*            <circle cx="101" cy="101" r="85" stroke="#DCDFE2" stroke-width="0.85"*/}
                    {/*                    stroke-dasharray="3.4"/>*/}
                    {/*            <circle cx="101" cy="101" r="70" stroke="#DCDFE2" stroke-width="0.7"*/}
                    {/*                    stroke-dasharray="2.8"/>*/}
                    {/*        </svg>*/}
                    {/*        <div className="ChoosePizzaSamplesTopInsideSVG">*/}
                    {/*            <div className="ChoosePizzaSamplesTopInsideSVGPizza" id="Pizza11">*/}

                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </rect>*/}
                    {/*    <p className="ChoosePizzaSamplesCaption" id="Tomato">*/}
                    {/*        Пепперони Фреш с томатами*/}
                    {/*    </p>*/}
                    {/*    <p className="ChoosePizzaSamplesDescription">*/}
                    {/*        Циплёнок (маленький кура), оливки, моцарелла, соус барбекю*/}
                    {/*    </p>*/}
                    {/*    <div className="ChoosePizzaSamplesSize">*/}
                    {/*        <div className="ChoosePizzaSamplesSizeCaption">*/}

                    {/*        </div>*/}
                    {/*        <div className="ChoosePizzaSamplesSizeChoose">*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseGray">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextGray">*/}
                    {/*                    20*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseWhite">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextBlack">*/}
                    {/*                    30*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseGray">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextGray">*/}
                    {/*                    40*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <p className="ChoosePizzaSamplesPrice">*/}
                    {/*        от 699 руб.*/}
                    {/*    </p>*/}
                    {/*    <div className="ChoosePizzaSamplesButton">*/}
                    {/*        <p className="ChoosePizzaSamplesButtonCaption">*/}
                    {/*            Заказать*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="ChoosePizzaSample">*/}
                    {/*    <rect className="ChoosePizzaSamplesTopInside">*/}
                    {/*        <svg className="ChoosePizzaSamplesTopInsideCircles"*/}
                    {/*             xmlns="http://www.w3.org/2000/svg" width="202" height="202" viewBox="0 0 202 202"*/}
                    {/*             fill="none">*/}
                    {/*            <circle cx="101" cy="101" r="100" stroke="#DCDFE2" stroke-dasharray="4"/>*/}
                    {/*            <circle cx="101" cy="101" r="85" stroke="#DCDFE2" stroke-width="0.85"*/}
                    {/*                    stroke-dasharray="3.4"/>*/}
                    {/*            <circle cx="101" cy="101" r="70" stroke="#DCDFE2" stroke-width="0.7"*/}
                    {/*                    stroke-dasharray="2.8"/>*/}
                    {/*        </svg>*/}
                    {/*        <div className="ChoosePizzaSamplesTopInsideSVG">*/}
                    {/*            <div className="ChoosePizzaSamplesTopInsideSVGPizza" id="Pizza12">*/}

                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </rect>*/}
                    {/*    <p className="ChoosePizzaSamplesCaption">*/}
                    {/*        Ветчина и сыр*/}
                    {/*    </p>*/}
                    {/*    <p className="ChoosePizzaSamplesDescription">*/}
                    {/*        Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик*/}
                    {/*    </p>*/}
                    {/*    <div className="ChoosePizzaSamplesSize">*/}
                    {/*        <div className="ChoosePizzaSamplesSizeCaption">*/}

                    {/*        </div>*/}
                    {/*        <div className="ChoosePizzaSamplesSizeChoose">*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseGray">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextGray">*/}
                    {/*                    20*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseWhite">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextBlack">*/}
                    {/*                    30*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*            <div className="ChoosePizzaSamplesSizeChooseGray">*/}
                    {/*                <p className="ChoosePizzaSamplesSizeChooseTextGray">*/}
                    {/*                    40*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <p className="ChoosePizzaSamplesPrice">*/}
                    {/*        от 399 руб.*/}
                    {/*    </p>*/}
                    {/*    <div className="ChoosePizzaSamplesButton">*/}
                    {/*        <p className="ChoosePizzaSamplesButtonCaption">*/}
                    {/*            Заказать*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>

            </div>
        </div>
    )
}