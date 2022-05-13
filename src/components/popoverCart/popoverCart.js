import React, { useState, useRef, useEffect, useContext } from "react";
import classNames from "classnames/bind";
import Icon from "feather-icons-react";
import { Link } from 'react-router-dom';
import moduleStyles from "./popover.module.css";
import { CardContext } from '../cartContext';
const cx = classNames.bind(moduleStyles);

function PopoverCart({ children }) {
    const refContainer = useRef();
    const { items, removeItem, clear } = useContext(CardContext)
    const [seeOptions, setseeOptions] = useState(false)
    const onHandleClickAway = (e) => {
        if (refContainer.current && !refContainer.current.contains(e.target)) {
            setseeOptions(false);
        }
    }
    useEffect(() => {
        window.addEventListener("mousedown", onHandleClickAway);
        return () => {
            window.removeEventListener("mousedown", onHandleClickAway);
        };
    }, []);

    useEffect(() => {
        setseeOptions(true)
    }, [items])


    return (
        <>
            <div onClick={() => setseeOptions(!seeOptions)}>
                {children}
            </div>
            {seeOptions &&
                <div className={cx("options")}
                    ref={refContainer} >
                    <div className="uppercase py-2">Carrito</div>
                    {items.length > 0 ?
                        <div className={cx("containerProducts")}>
                            {items.map(item => (
                                <div style={{ backgroundImage: `url(${item?.item?.image})` }} className={cx("border-2 border-slate-500 my-1 bg-no-repeat bg-center bg-cover flex justify-between ", "containerProductsSelected")} key={item?.item?.id}>
                                    <div className={cx("flex flex-col text-white", "containerDetails")}>
                                        <span>{item?.item?.title}</span>
                                        <span>Cantidad: {item?.quantity}</span>
                                    </div>
                                    <button className={cx("text-white", "button")} onClick={() => removeItem(item?.item?.id)} ><Icon icon="trash-2" width="20" height="20" /></button>
                                </div>
                            ))}
                        </div>
                        : <div>Tu carrito esta vacio</div>
                    }
                    {
                        items.length > 0 &&
                        <div className="flex flex-col" >
                            <Link to={`/cart`} className={cx("py-2", "buttonShopping")} type="button" >Finalizar compra</Link>
                            <button className={cx("py-2", "buttonClean")} type="button" onClick={clear} >Limpiar carrito</button>
                        </div>
                    }
                </div>

            }
        </>
    )
}
export default PopoverCart