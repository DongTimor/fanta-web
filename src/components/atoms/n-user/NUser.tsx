import {  AvatarProps, User, UserProps } from "@nextui-org/react";
import { ReactNode } from "react";


export interface IUserProps extends UserProps{
    name:string,
    className?:string,
    description?:ReactNode,
    size?:string,
    avatarProps?:AvatarProps
}


function NUser({className,name,description,avatarProps,size,...rest}:IUserProps){
    return(
        <User 
        avatarProps={avatarProps}
        className={className}
        name={name}
        description={description}
        size={size}
        {...rest}
        />

        
    )
}

export default NUser