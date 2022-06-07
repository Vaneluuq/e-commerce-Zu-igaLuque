import Icon from "feather-icons-react";
import classNames from "classnames/bind";
import cardStyles from "./CardWidget.module.css";
import PopoverCart from "../PopoverCart/PopoverCart";
import { useContext } from "react";
import { CardContext } from "../cartContext";
const cx = classNames.bind(cardStyles);

const CardWidget = ({ iconStyle }) => {
    const { items } = useContext(CardContext)
    const totalItems = items.map(item => item.quantity).reduce((prev, curr) => prev + curr, 0)
    return (
        <PopoverCart>
            <div>
                <span style={iconStyle} className={cx("cursor-pointer")} > <Icon icon="shopping-cart" width="25" height="25" /></span>
                <div className={cx("counter")}>{totalItems}</div>
            </div>
        </PopoverCart>

    );
}

export default CardWidget;