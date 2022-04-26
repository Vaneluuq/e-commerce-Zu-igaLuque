import React from 'react';
import classNames from "classnames/bind";
import itemListStyles from "./itemList.module.css";
const cx = classNames.bind(itemListStyles);

const ItemList = ({ data }) => {
    return (
        <>
            <div className={cx("m-3", "card")} >
                <div className={cx("imagenHover", "relative h-3/4 flex justify-center items-center overflow-hidden")} >
                    <div className={cx("absolute top-2 right-0 p-1", "price")} >{`$ ${data.price}`}</div>
                    <div className={cx("divImg")} >
                        <img className={cx("w-32")} src={data.image}></img>
                    </div>
                    <div className={cx("absolute", "color")} >
                        <div className={cx("flex justify-center items-center w-full h-full")} >
                            <button className={cx("px-6 py-2 rounded-md text-white", "buttonAdd")} >Agregar al carrito</button>
                        </div>
                    </div>
                </div>
                <div className={cx("h-1/4 overflow-hidden border-t-2 py-1")}>
                    <span className={cx("h-11", "aditionalStyle")} >{data.title}</span>
                    <span className={cx("aditionalStyle", "cursor-pointer hover:text-amber-600")} >Ver mas</span>
                </div>
            </div>
        </>
    )
}

export default ItemList;