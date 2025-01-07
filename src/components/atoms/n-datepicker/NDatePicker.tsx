import { DatePicker, DatePickerProps } from "@nextui-org/react";

export interface INDatePickerProps extends DatePickerProps {
    className?: string;
}

function NDatePicker({className, ...rest}: INDatePickerProps) {
  return (
    <DatePicker className={className} {...rest} />
  );
}

export default NDatePicker;