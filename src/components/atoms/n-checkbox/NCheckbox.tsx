import { Checkbox, CheckboxProps } from "@nextui-org/react";

export interface NCheckboxProps extends CheckboxProps {
    className?: string;
}

function NCheckbox({className, ...rest}: NCheckboxProps) {
  return (
    <Checkbox className={className} {...rest} />
  );
}

export default NCheckbox;