import cn from "./No.module.sass"

export default function No() {
    return(
        <div className={cn.No}>
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
    )
}