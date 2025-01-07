import { Select, SelectItemProps, SelectProps } from "@nextui-org/react";

export interface NSelectProps extends SelectProps {
  isRequired?: boolean;
  label?: string;
  placeholder?: string;
  defaultSelectedKeys?: string[];
  className?: string;

}


export function NSelect({
  isRequired,
  label,
  placeholder,
  defaultSelectedKeys,
  className,
  ...rest
}: NSelectProps) {
  return (
    <Select
      isRequired={isRequired}
      label={label}
      placeholder={placeholder}
      defaultSelectedKeys={defaultSelectedKeys}
      className={className}
      {...rest}
    >

    </Select>
  );
}
