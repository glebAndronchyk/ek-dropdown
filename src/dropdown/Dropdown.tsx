import {FC, useEffect, useRef, useState} from "react";
import DropdownPropsInterface from "./dropdownProps.interface";
import DropdownItem from "./dropdownItem/DropdownItem";
import DataInterface from "../interfaces/data.interface";
import ButtonView from "./buttonView/ButtonView";

import './dropdown.css';
import './dropdownItem/dropdownItem.css'

const Dropdown: FC<DropdownPropsInterface> = (props) => {
    const { data } = props;
    const [selectedItem, setSelectedItem] = useState<DataInterface | null>(null);
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const handleOpenDropdown = (): void => {
        setIsOpened(!isOpened);
    }

    const handleClickOnItem = (data: DataInterface) => {
        setSelectedItem(data);
        setIsOpened(false);
    }

    const handleBackgroundClick = (event: Event): void => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpened(false);
        }
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

    useEffect(() => {
        document.addEventListener('click', handleBackgroundClick);
        return () => document.removeEventListener('click', handleBackgroundClick);
    }, []);

    return (
        <div
            className='dropdownWrapper'
            ref={dropdownRef}
        >
            <button
                className='dropdownButton'
                onClick={handleOpenDropdown}
            >
                {selectedItem
                    ? <ButtonView
                        name={selectedItem.name}
                        surname={selectedItem.surname}
                        image={selectedItem.image}
                    />
                    : <span>Select items</span>
                }
            </button>
            {isOpened && <ul className='itemsList'>
                {dropdownItems}
            </ul>}
        </div>
    );
}

export default Dropdown;
