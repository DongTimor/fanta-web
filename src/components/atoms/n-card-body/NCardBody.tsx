import { CardBody } from "@nextui-org/react";
import { ReactNode } from "react";


export interface INCardBodyProps{
    className?:string,
    children?: ReactNode
}

function NCardBody({className,children}:INCardBodyProps){
    return(
        <CardBody className={className}>
            {children}
        </CardBody>
    )
}

export default NCardBody