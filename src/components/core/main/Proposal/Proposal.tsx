import cn from "./Proposal.module.sass"
import Image from "next/image";

export default function Proposal(props) {
    let pic1 = props.pic1
    let alt1 = props.alt1
    let height1 = props.height1
    let width1 = props.width1
    let pic2 = props.pic2
    let alt2 = props.alt2
    let height2 = props.height2
    let width2 = props.width2
    let caption = props.caption
    let description = props.description
    let left = props.left
    let img = <div></div>
    if (left == "True") {
        img =

        <div className={cn.ProposalsLeftImage}>
            <Image className={cn.ProposalsLeftImageLeft} src={pic1}
                   alt={alt1}
                   height={height1} width={width1} style={{objectFit: 'contain'}}/>
            <Image className={cn.ProposalsLeftImageRight} src={pic2}
                   alt={alt2}
                   height={height2} width={width2} style={{objectFit: 'contain'}}/>
        </div>
    } else {
        img =
            <Image src={pic1} alt={alt1} height={height1} width={width1} />
    }
    return (
        <div className={cn.Proposal}>
            {img}
            <p className={cn.ProposalsCaption}>
                {caption}
            </p>
            <p className={cn.ProposalsDescription}>
                {description}
            </p>
        </div>
    )
}