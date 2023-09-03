import cn from "./Phone.module.sass"
import Receiver from "core/header/Receiver/Receiver";
import No from "core/header/No/No";

export default function Phone() {
    return (
        <div className={cn.Phone}>
            <Receiver/>
            <No/>
        </div>
    )
}