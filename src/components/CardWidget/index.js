import Icon from "feather-icons-react";
import classNames from "classnames/bind";
import cardStyles from "./cardWidget.module.css";
import PopoverCart from "../popoverCart/popoverCart";
import { useContext } from "react";
import { CardContext } from "../cartContext";
const cx = classNames.bind(cardStyles);

const CardWidget = ({ iconStyle }) => {
    const { items } = useContext(CardContext)
    return (
        <PopoverCart>
            <div>
                <span style={iconStyle} className={cx("cursor-pointer")} > <Icon icon="shopping-cart" width="25" height="25" /></span>
                <div className={cx("counter")}>{items?.length}</div>
            </div>
        </PopoverCart>

    );
}

export default CardWidget;