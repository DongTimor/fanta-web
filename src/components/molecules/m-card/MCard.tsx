import { Card, CardProps } from "@nextui-org/react";

export interface IMCardProps extends CardProps {
  className?:string
}

function MCard({
  className,
  ...rest
}: IMCardProps) {
  return (
    <Card className={className} {...rest}/>
    
  );
}

export default MCard;
