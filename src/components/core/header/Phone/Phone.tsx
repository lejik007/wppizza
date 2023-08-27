import cn from "./Phone.module.sass"
import Receiver from "core/header/Receiver/Receiver";

export default function Phone() {
    return (
        <div className={cn.Phone}>
            <Receiver/>
            <div className={cn.NO}>
                <div className={cn.Number}>
                    <a href="tel:+79184326587">
                        +7 (918) 432-65-87
                    </a>
                </div>
                <div className={cn.OperationTime}>
                    <p>
                        Ежедневно с 9:00 до 23:00
                    </p>
                </div>
            </div>
        </div>
    )
}