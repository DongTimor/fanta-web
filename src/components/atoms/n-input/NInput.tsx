
import {InputProps, Input} from "@nextui-org/react";

export interface INInputProps extends InputProps{
  className?:string,
}

function NInput({className, ...rest}:INInputProps){
  return(
    <Input
    className={className}
    {...rest}
    >
    </Input>
  )
}

export default NInput;