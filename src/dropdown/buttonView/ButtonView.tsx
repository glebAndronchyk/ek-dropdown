import {FC} from "react";
import ButtonViewPropsInterface from "./buttonViewProps.interface";
import getNameInitials from "../../utils/getNameInitials";

import './buttonView.css'

const ButtonView: FC<ButtonViewPropsInterface> = (props) => {
    const {name, surname, image} = props;

    return (
        <div className='buttonView'>
            {image && <img className='dropdownItem__image' src={image} alt="userPhoto"/>}
            {surname ? getNameInitials(name, surname) : name}
        </div>
    );
}

export default ButtonView;
