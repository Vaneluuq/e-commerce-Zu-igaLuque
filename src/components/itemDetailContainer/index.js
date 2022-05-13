import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { data } from "../mockdata";
import ItemDetail from "../itemDetail";


const ItemDetailContainer = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const [alert, setAlert] = useState(false)

    useEffect(() => {
        (
            async () => {
                const getProduct = await getProducts()
                if (getProduct) {
                    setLoading(false)
                    setProduct(getProduct)
                } else {
                    setLoading(false)
                    setAlert(true)
                }
            }
        )()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productId])

    const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data.find(r => r.id == productId));
            }, 2000);
        });
    }

    return (
        <>
            {loading ?
                <div
                    style={{ height: "100vh" }}
                    className='flex justify-center items-center text-2xl text-amber-600'>"Loading..."
                </div>
                : alert ?
                    <div
                        style={{ height: "100vh" }}
                        className='flex justify-center items-center text-2xl text-amber-600' >Upps! Ha ocurrido un error, recarga la pagina nuevamente.
                    </div>
                    : <ItemDetail product={product} />}
        </>
    );
}

export default ItemDetailContainer;