import { MobileActionsContainer } from "./styled"
import { FaBookmark, FaHeart, FaList, FaStar } from 'react-icons/fa';



const MobileActions = () => {
    return (
        <MobileActionsContainer>
            <a href="" className="item"><FaList /></a>
            <a href="" className="item"><FaHeart /></a>
            <a href="" className="item"><FaBookmark /></a>
            <a href="" className="item"><FaStar /></a>

        </MobileActionsContainer>
    )
}

export default MobileActions