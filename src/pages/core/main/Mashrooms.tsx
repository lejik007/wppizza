import "./Mashrooms.css"
export default function Mashrooms() {
    return (
        <div className="ChoosePizzaSample">
            <rect className="ChoosePizzaSamplesTopInside">
                <svg className="ChoosePizzaSamplesTopInsideCircles"
                     xmlns="http://www.w3.org/2000/svg" width="202" height="202" viewBox="0 0 202 202"
                     fill="none">
                    <circle cx="101" cy="101" r="100" stroke="#DCDFE2" stroke-dasharray="4"/>
                    <circle cx="101" cy="101" r="85" stroke="#DCDFE2" stroke-width="0.85"
                            stroke-dasharray="3.4"/>
                    <circle cx="101" cy="101" r="70" stroke="#DCDFE2" stroke-width="0.7"
                            stroke-dasharray="2.8"/>
                </svg>
                <div className="ChoosePizzaSamplesTopInsideSVG">
                    <div className="ChoosePizzaSamplesTopInsideSVGPizza" id="Pizza08">

                    </div>
                </div>
            </rect>
            <p className="ChoosePizzaSamplesCaption">
                С грибами
            </p>
            <p className="ChoosePizzaSamplesDescription">
                Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик
            </p>
            <div className="ChoosePizzaSamplesSize">
                <div className="ChoosePizzaSamplesSizeCaption">

                </div>
                <div className="ChoosePizzaSamplesSizeChoose">
                    <div className="ChoosePizzaSamplesSizeChooseGray">
                        <p className="ChoosePizzaSamplesSizeChooseTextGray">
                            20
                        </p>
                    </div>
                    <div className="ChoosePizzaSamplesSizeChooseWhite">
                        <p className="ChoosePizzaSamplesSizeChooseTextBlack">
                            30
                        </p>
                    </div>
                    <div className="ChoosePizzaSamplesSizeChooseGray">
                        <p className="ChoosePizzaSamplesSizeChooseTextGray">
                            40
                        </p>
                    </div>
                </div>
            </div>
            <p className="ChoosePizzaSamplesPrice">
                от 399 руб.
            </p>
            <div className="ChoosePizzaSamplesButton">
                <p className="ChoosePizzaSamplesButtonCaption">
                    Заказать
                </p>
            </div>
        </div>
    )
}