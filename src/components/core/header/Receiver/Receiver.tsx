import cn from './Receiver.module.sass'
import Image from "next/image";
export default function Receiver() {
    return (
        <div className={cn.Receiver}>
            <Image src='/images/svg/receiver.svg' alt='Вид трубки телефона' width={80} height={80} />
        </div>
    )
}