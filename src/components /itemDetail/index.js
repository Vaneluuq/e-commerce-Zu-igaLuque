import React, { useState } from "react";
import classNames from "classnames/bind";
import itemDetails from "./itemDetails.module.css";
import Icon from "feather-icons-react";
const cx = classNames.bind(itemDetails);

const ItemDetail = ({ product }) => {
    const [counter, setCounter] = useState(1)

    const stylePayment = () => {
        if (product?.category === "men's clothing") {
            return "containerPaymentMen"
        } else if (product?.category === "women's clothing") {
            return "containerPaymentWomen"
        } else {
            return "containerPaymentOthers"
        }
    }

    return (
        <div className="flex py-10 px-20 h-screen" >
            <div className={cx("w-6/12 flex flex-col", "containerImagen")} >
                <div className={cx("flex justify-center items-center", "heightStyle")}>
                    <div>
                        <img className={cx("w-40", "zoom")} src={product?.image}></img>
                    </div>
                </div>
                <div className=" flex flex-col justify-center items-center px-20" >
                    <h3 className="text-lg pb-2">Details</h3>
                    <span className="text-sm" > {product?.description} </span>
                </div>
            </div>
            <div className={cx("w-6/12 flex flex-col pt-20", stylePayment())} >
                <h3 className="text-base" >DulceTarde clothes</h3>
                <h2 className="text-lg pb-5" >{product?.title} </h2>
                <span className="text-lg pb-5" >{`$${product?.price}`}</span>
                <div className="text-base pb-10" >
                    {(product?.category === "men's clothing" || product?.category === "women's clothing") ?
                        <select className="w-52 h-10 text-center" name="select">
                            <option hidden selected>Selecciona una talla</option>
                            <option value="value1">XS</option>
                            <option value="value2">S</option>
                            <option value="value3">M</option>
                            <option value="value3">L</option>
                            <option value="value3">XL</option>
                        </select>
                        : <></>
                    }
                </div>
                <div className="pb-20" >
                    <div className="pb-2" >Cuantas Prendas quieres</div>
                    <div className="flex justify-center" >
                        <button className="border-2 border-current w-10" onClick={() => setCounter(counter - 1)} > - </button>
                        <div className="w-10">{counter} </div>
                        <button className="border-2 border-current w-10" onClick={() => setCounter(counter + 1)} > + </button>

                    </div>

                </div>
                <div>
                    <button className={cx("border-2 border-current h-10 w-52 mb-2 rounded-md", "hoveredAction")} >
                        <div className={cx("flex items-center justify-around")} >
                            <span>Agregar al carrito</span>
                            <Icon icon="shopping-cart" width="20" height="20" />
                        </div>

                    </button>
                </div>
                <div>
                    <button className={cx("border-2 border-current h-10 w-52 mb-2 rounded-md", "hoveredAction")} >
                        <div className={cx("flex items-center justify-around")}>
                            <span>ir a comprar</span>
                            <Icon icon="credit-card" width="20" height="20" />
                        </div>
                    </button>
                </div>
                <div>
                    <button className={cx("border-2 border-current h-10 w-52 rounded-md", "hoveredAction")} >
                        <div className={cx("flex items-center justify-around")}>
                            <span>Agregar a favoritos</span>
                            <Icon icon="heart" width="20" height="20" />
                        </div>
                    </button>
                </div>

            </div>

        </div>
    );
}

export default ItemDetail;