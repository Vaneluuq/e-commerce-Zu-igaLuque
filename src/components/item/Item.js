import React, { useContext, useState } from 'react';
import classNames from "classnames/bind";
import itemListStyles from "./Item.module.css";
import { Link } from 'react-router-dom';
import { CardContext } from '../cartContext';
const cx = classNames.bind(itemListStyles);

const Item = ({ data }) => {
    const [counter, setCounter] = useState(1)
    const { addItem } = useContext(CardContext)

    const addToShopping = (item) => {
        const resumeProduct = {
            item: item,
            quantity: counter,
            total: item.price * counter
        }
        addItem(resumeProduct)
    }

    return (
        <>
            <div className={cx("m-3", "card")} >
                <div className={cx("imagenHover", "relative h-3/4 flex justify-center items-center overflow-hidden")} >
                    <div className={cx("absolute top-2 right-0 p-1", "price")} >{`$ ${data.price}`}</div>
                    <div className={cx("divImg")} >
                        <img alt='productImage' className={cx("w-32")} src={data.image}></img>
                    </div>
                    <div className={cx("absolute", "color")} >
                        <div className={cx("flex flex-col justify-center items-center w-full h-full")} >
                            <div className={cx("flex justify-center flex-col", "containerCart")} >
                                <span>Numero de unidades</span>
                                <div  className='flex justify-center py-2'>
                                    <button className={cx("border-2 border-current w-10 rounded-md bg-slate-300 border-0", "pressButton")} onClick={() => setCounter(counter - 1)} > - </button>
                                    <div className="w-10">{counter} </div>
                                    <button className={cx("border-2 border-current w-10 rounded-md bg-slate-300 border-0", "pressButton")} onClick={() => setCounter(counter + 1)} > + </button>
                                </div>
                                <button onClick={() => addToShopping(data)} className={cx("text-white py-1", "buttonAdd")} >Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("h-1/4 overflow-hidden border-t-2 py-1")}>
                    <span className={cx("h-11", "aditionalStyle")} >{data.title}</span>
                    <Link to={`/item/${data.id}`} className={cx("aditionalStyle", "cursor-pointer hover:text-amber-600 hover:underline")}>Ver mas</Link>
                </div>

            </div>
        </>
    );
}

export default Item;