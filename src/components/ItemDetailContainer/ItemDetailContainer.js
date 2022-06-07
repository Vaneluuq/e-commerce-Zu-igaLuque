import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import Alert from "../Alert/Alert";
import Loading from "../Loading/Loading";

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
                } else {
                    setAlert(true)
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
            {
                loading &&
                <Loading />
            }
            {
                alert &&
                <Alert message={"Upps! Se ha presentado un error al procesar la informacion consultada."} />
            }
            {(!alert && !loading) &&
                <ItemDetail product={product} />
            }
        </>
    );
}

export default ItemDetailContainer;