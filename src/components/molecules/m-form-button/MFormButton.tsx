
import { INButtonProps } from "../../atoms/n-button";
import NButton from "../../atoms/n-button/NButton";

export interface IMFormButtonProps extends INButtonProps{
    className : string
}


function MFormButton({children,type, className}:IMFormButtonProps){
    return(
                <NButton
                type={type}
                className={className}
                >
                    {children}
                </NButton>
    )
}

export default MFormButton