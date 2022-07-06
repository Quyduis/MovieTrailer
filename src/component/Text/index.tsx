import { TextStyled } from "./styled"
import { TextProps } from "./type"



const Text = ({...props}: TextProps) => {
    return (
        <TextStyled {...props}/>
    )
}

export default Text