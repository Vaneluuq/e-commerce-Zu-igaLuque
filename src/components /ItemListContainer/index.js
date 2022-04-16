import classNames from "classnames/bind";
import creditStyles from "./itemListContainer.module.css";
const cx = classNames.bind(creditStyles);

const ItemListContainer = ({greeting}) => {
    return ( 
        <div className={cx("flex flex-wrap justify-center items-center text-2xl", "containerList")} >{greeting}</div>
     );
}
 
export default ItemListContainer;