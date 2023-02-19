import {FC} from "react";
import DropdownItemPropsInterface from "./dropdownItemProps.interface";

const DropdownItem: FC<DropdownItemPropsInterface> = (props) => {
    const {data, itemClickHandler, isSelected} = props;
    const activeClass = isSelected ? 'dropdownItem__button-active' : '';

    const onClickHandler = () => {
        itemClickHandler(data);
    }

    return (
        <li className='dropdownItem'>
            <button className={`dropdownItem__button dropdownButton ${activeClass}`} onClick={onClickHandler}>
                {data.image &&
                  <img
                    className='dropdownItem__image'
                    src={data.image}
                    alt="userImage"/>
                }
                <span>
                    {data.name} {data?.surname}
                </span>
            </button>
        </li>
    )
}

export default DropdownItem;
