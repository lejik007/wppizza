import Image from "next/image";
import cn from "./FollowUsPics.module.sass";

export default function FollowUsPics(props) {
    let pic = props.pic
    let alt = props.alt
    return(
        <Image className={cn.FollowUsPic} src={pic} alt={alt} height={100} width={100} />
    )
}