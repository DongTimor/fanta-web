import { SelectItem, SelectItemProps } from "@nextui-org/react";

export interface SelectCustomProps extends SelectItemProps {
    customClassName?: string; // Thêm thuộc tính tùy chỉnh nếu cần
}

const SelectCustom: React.FC<SelectCustomProps> = ({
    customClassName,
    children,
    ...rest
}) => {
    return (
        <SelectItem
            className={customClassName} // Sử dụng className tùy chỉnh
            {...rest} // Truyền tất cả các props còn lại
        >
            {children} {/* Hiển thị nội dung bên trong */}
        </SelectItem>
    );
};

export default SelectCustom;