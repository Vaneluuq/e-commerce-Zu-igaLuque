import React, { useState, useEffect } from 'react';
import classNames from "classnames/bind";
import creditStyles from "./itemListContainer.module.css";
import ItemList from '../itemList';
import { data } from "../mockdata"
const cx = classNames.bind(creditStyles);

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState(false)

    useEffect(() => {
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                setLoading(true)
                resolve(data);
            }, 2000);
        });
        promise.then((value) => {
            setLoading(false)
            setProducts(value);
        }).catch(() => {
            setAlert(true)
        })
    }, [])


    return (
        <div className={cx("flex flex-wrap justify-center mt-10")} >
            {loading ? "cargando..." :
                products?.map(item => (
                    <ItemList key={item.id} data={item} />
                ))
            }
            {
                alert && <div>Upps! Ha ocurrido un error, recarga la pagina nuevamente</div>
            }
        </div>
    );
}

export default ItemListContainer;