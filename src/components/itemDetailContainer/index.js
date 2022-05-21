import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import ItemDetail from "../itemDetail";

const ItemDetailContainer = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const [alert, setAlert] = useState(false)

    const getProduct = async () => {
        const db = getFirestore()
        const productSelected = doc(db, "items", productId)
        getDoc(productSelected)
            .then((res) => {
                setLoading(false)
                if (res.exists()) {
                    setProduct({ "id": res.id, ...res.data() })
                }
            })
            .catch(() => {
                setAlert(true)
            })
    }

    useEffect(() => {
        getProduct()
    }, [])

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