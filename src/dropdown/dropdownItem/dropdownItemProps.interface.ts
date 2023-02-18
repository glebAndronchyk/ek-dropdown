import DataInterface from "../../interfaces/data.interface";

interface DropdownItemPropsInterface {
    data: DataInterface;
    itemClickHandler: (item: DataInterface) => void;
    isSelected: boolean;
}

export default DropdownItemPropsInterface;
