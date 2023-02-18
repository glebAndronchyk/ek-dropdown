import {FC} from "react";
import DropdownItemPropsInterface from "./dropdownItemProps.interface";

const DropdownItem: FC<DropdownItemPropsInterface> = (props) => {
    const {data, itemClickHandler, isSelected} = props;

    const onClickHandler = () => {
        itemClickHandler(data);
    }

    return (
        <li>
            <button onClick={onClickHandler}>
                {data.image && <img src={data.image} alt="userImage"/>}
                <span>
                    {data.name} {data?.surname}
                </span>
            </button>
        </li>
    )
}

export default DropdownItem;
