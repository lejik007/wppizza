import './HeaderDesktop.css'
import Logo from "@/pages/desktop/comps/maincomps/header/comps/Logo";
import Receiver from "@/pages/desktop/comps/maincomps/header/comps/Receiver";
import OrderLeft from "@/pages/desktop/comps/maincomps/header/comps/OrderLeft";
import English from "@/pages/desktop/comps/maincomps/header/comps/English";

export default function HeaderDesktop() {
    return (
        <div className="HeaderDesktop">
            <div className="Container">
                <Logo/>
                <div className="Menu">
                    <p>
                        Меню
                    </p>
                </div>
                <div className="About">
                    <p>
                        О нас
                    </p>
                </div>
                <div className="Contacts">
                    <p>
                        Контакты
                    </p>
                </div>
                <div className="Phone">
                    <Receiver/>
                    <div className="NO">
                        <div className="Number">
                            <p>
                                +7 (918) 432-65-87
                            </p>
                        </div>
                        <div className="OperationTime">
                            <p>
                                Ежедневно с 9:00 до 23:00
                            </p>
                        </div>
                    </div>
                </div>
                <div className="Order">
                    {/*<div className="OrderLeft">*/}
                        <OrderLeft/>
                    {/*    <div className="OrderNumber">*/}
                    {/*        <rect className="OrderNumberRect">*/}
                    {/*            3*/}
                    {/*        </rect>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="OrderRight">
                        <div className="OrderYour">
                        <p>
                            Ваш заказ
                        </p>
                        </div>
                        <div className="OrderContain">
                            <p>
                                Итальянская и ещё 2 пиццы
                            </p>
                        </div>
                    </div>
                </div>
                <English/>
            </div>
        </div>
    );
}