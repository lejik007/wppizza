import cn from "./FollowUs.module.sass"
import Image from "next/image";
import FollowUsPics from "core/main/FollowUsPics/FollowUsPics";
export default function FollowUs() {
    return (
        <div className={cn.FollowUs}>
            <p className={cn.FollowUsProposal}>
                Следите за нами в Instagram
            </p>
            <p className={cn.FollowUsAdress}>
                @pizzamenu
            </p>
            <div className={cn.FollowUsPics}>
                <FollowUsPics
                    pic = "/images/FollowUs11.png"
                    alt = "Картинка 11"
                    height={100}
                    width={100}
                />
                <FollowUsPics
                    pic = "/images/FollowUs12.png"
                    alt = "Картинка 12"
                    height={100}
                    width={100}
                />
                <FollowUsPics
                    pic = "/images/FollowUs13.png"
                    alt = "Картинка 13"
                    height={100}
                    width={100}
                />
                <FollowUsPics
                    pic = "/images/FollowUs14.png"
                    alt = "Картинка 14"
                    height={100}
                    width={100}
                />
                <FollowUsPics
                    pic = "/images/FollowUs15.png"
                    alt = "Картинка 15"
                    height={100}
                    width={100}
                />
                <FollowUsPics
                    pic = "/images/FollowUs21.png"
                    alt = "Картинка 21"
                    height={100}
                    width={100}
                />
                <FollowUsPics
                    pic = "/images/FollowUs22.png"
                    alt = "Картинка 22"
                    height={100}
                    width={100}
                />
                <FollowUsPics
                    pic = "/images/FollowUs23.png"
                    alt = "Картинка 23"
                    height={100}
                    width={100}
                />
                <FollowUsPics
                    pic = "/images/FollowUs24.png"
                    alt = "Картинка 24"
                    height={100}
                    width={100}
                />
                <FollowUsPics
                    pic = "/images/FollowUs25.png"
                    alt = "Картинка 25"
                    height={100}
                    width={100}
                />
            </div>
        </div>
    )
}