import {FC, useState} from "react";
import DropdownPropsInterface from "./dropdownProps.interface";
import DropdownItem from "./dropdownItem/DropdownItem";
import DataInterface from "../interfaces/data.interface";
import ButtonView from "./buttonView/ButtonView";

const Dropdown: FC<DropdownPropsInterface> = (props) => {
    const { data } = props;
    const [selectedItem, setSelectedItem] = useState<DataInterface | null>(null);
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const handleOpenDropdown = (): void => {
        setIsOpened(!isOpened);
    }

    const handleClickOnItem = (data: DataInterface): void => {
        setSelectedItem(data);
        setIsOpened(false);
    }

    const dropdownItems = data.map(item => {
      const {id} = item

      return (
        <DropdownItem
            key={id}
            data={item}
            isSelected={selectedItem?.id === id}
            itemClickHandler={handleClickOnItem}
        />
      )
    });

    return (
        <div>
            <button onClick={handleOpenDropdown}>
                {selectedItem
                    ? <ButtonView
                        name={selectedItem.name}
                        surname={selectedItem.surname}
                        image={selectedItem.image}
                    />
                    : 'Select items'
                }
            </button>
            {isOpened && <ul>
                {dropdownItems}
            </ul>}
        </div>
    );
}

export default Dropdown;
