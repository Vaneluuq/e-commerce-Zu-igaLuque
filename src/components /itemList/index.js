import React, { useState } from 'react';
import classNames from "classnames/bind";
import itemListStyles from "./itemList.module.css";
const cx = classNames.bind(itemListStyles);

const ItemList = ({ data }) => {
    return (
        <>
            <div className={cx("m-3", "card")} >
                <div className={cx("relative h-3/4 flex justify-center items-center border-2 border-solid  border-cyan-900 overflow-hidden")} >
                    <div className={cx("absolute top-2 right-0 p-1", "price")} >{`$ ${data.price}`}</div>
                    <div className={cx("cursor-pointer")} >
                        <img className={cx("w-32", "imagenHover")} src={data.image}></img>
                    </div>
                </div>
                <div className={cx("h-1/4 overflow-hidden")}>
                    <span className={cx("h-11", "aditionalStyle")} >{data.title}</span>
                </div>
            </div>
        </>
    )
}

export default ItemList;