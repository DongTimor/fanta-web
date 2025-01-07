import { Image, ImageProps } from "@nextui-org/react";


export interface NImagePorps extends ImageProps{
    src?: string;
    className?:string
}

function NImage({className, ...rest}:ImageProps){
    return(
        <Image
            className={className}
            {...rest}
        />
    )
}

export default NImage