
import { ReactNode } from "@tanstack/react-router";
import { INButtonProps } from "../../atoms/n-button";
import NButton from "../../atoms/n-button/NButton";



export interface IMIconButtonProps extends INButtonProps{
    className?:string,
    Icon:ReactNode,
}

function MIconButton({className, Icon}:IMIconButtonProps){
    return(
        <NButton
        className={`icon-button ${className}`}
        isIconOnly
        >
            {Icon}
        </NButton>
    )
}

export default MIconButton