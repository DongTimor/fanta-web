
import { Button, ButtonProps as BaseButtonProps } from "@nextui-org/react";

export interface INButtonProps extends BaseButtonProps {
  className?: string;
}

function NButton({className, ...rest}:INButtonProps){
  return(
    <Button
    className={className}
    {...rest}
    >      
    </Button>
  )
}

export default NButton;