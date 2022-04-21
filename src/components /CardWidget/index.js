import Icon from "feather-icons-react";
import classNames from "classnames/bind";
import cardStyles from "./cardWidget.module.css";
const cx = classNames.bind(cardStyles);

const CardWidget = () => {
    return (
        <span className={cx("color", "cursor-pointer")} > <Icon icon="shopping-cart" width="25" height="25" /></span>
    );
}

export default CardWidget;