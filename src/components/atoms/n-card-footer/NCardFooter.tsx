import { CardFooter, CardFooterProps } from '@nextui-org/react';
import { ReactNode } from 'react';

export interface INCardFooterProps extends CardFooterProps {
  children?: ReactNode;
}

function NCardFooter({ children, ...rest }: INCardFooterProps) {
  return (
    <CardFooter {...rest}>
      {children}
    </CardFooter>
  );
}

export default NCardFooter;