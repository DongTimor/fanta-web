import { CardHeader } from "@nextui-org/react";
import { ReactNode } from "react";


export interface INCardHeaderProps{
    className?:string,
    children?: ReactNode
}

function NCardHeader({className,children}:INCardHeaderProps){
    return(
        <CardHeader className={className}>
            {children}
        </CardHeader>
    )
}

export default NCardHeader