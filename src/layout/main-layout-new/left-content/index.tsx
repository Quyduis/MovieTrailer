import { ReactNode } from "react"

interface IProps {
    userInfoElement?: ReactNode
}

const LeftContent = ({userInfoElement}: IProps) => {
    return (
        <div className="block-main__left">
            {userInfoElement}
        </div>
    )
}

export default LeftContent