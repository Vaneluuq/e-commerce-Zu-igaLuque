import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { data } from "../mockdata";
import ItemDetail from "../itemDetail";


const ItemDetailContainer = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (
            async () => {
                const getProduct = await getProducts()
                if (getProduct) {
                    setLoading(false)
                    setProduct(getProduct)
                }
            }
        )()
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
            {loading ? "Loading..." : <ItemDetail product={product} /> }
        </>
    );
}

export default ItemDetailContainer;