import { ReactNode } from "react"

interface IProps {
    userInfoElement?: ReactNode
    leftMenuElement?: ReactNode
}

const LeftContent = ({userInfoElement, leftMenuElement}: IProps) => {
    return (
        <div className="block-main__left">
            {userInfoElement}
            {leftMenuElement}
        </div>
    )
}

export default LeftContent