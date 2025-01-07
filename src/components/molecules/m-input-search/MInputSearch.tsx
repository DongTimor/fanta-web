import { INInputProps } from "../../atoms/n-input";
import NInput from "../../atoms/n-input/NInput";
import { BsSearch } from "react-icons/bs";
import "./MSearchInput.scss"
import classNames from "classnames";

export interface IMInputSreachProps extends INInputProps{
        className?: string;
}

function MInputSearch({className, ...rest}:IMInputSreachProps){
    return(
        <NInput
        // label="Search"
        labelPlacement="inside"
        id="search"
        className={classNames("m-search-input", className)}
        placeholder="Search"
        startContent={<BsSearch />}
        {...rest}
        ></NInput>
    )
}

export default MInputSearch