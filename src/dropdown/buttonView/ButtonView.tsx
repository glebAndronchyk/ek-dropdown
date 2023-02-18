import {FC} from "react";
import ButtonViewPropsInterface from "./buttonViewProps.interface";
import getNameInitials from "../../utils/getNameInitials";

const ButtonView: FC<ButtonViewPropsInterface> = (props) => {
    const {name, surname, image} = props;

    return (
        <div>
            {image && <img src={image} alt="userPhoto"/>}
            {surname ? getNameInitials(name, surname) : name}
        </div>
    );
}

export default ButtonView;
