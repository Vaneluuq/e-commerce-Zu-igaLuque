import React, { Fragment, useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';
import Alert from '../Alert/Alert';

const ItemListContainer = () => {
    const { category = null } = useParams()
    const [productByCategory, setproductByCategory] = useState([])
    const [loading, setLoading] = useState(true)
    const [alert, setAlert] = useState(false)

    const getAllProducts = async () => {
        const db = getFirestore()
        const products = collection(db, "items")
        getDocs(products).then((res) => {
            setLoading(false)
            if (res.size > 0) {
                setproductByCategory(res.docs.map(doc => ({ "id": doc.id, ...doc.data() })))
            }
        })
    }
    const getProductsByCategory = () => {
        const db = getFirestore()
        const q = query(
            collection(db, "items"),
            where("category", "==", category)
        );
        getDocs(q)
            .then((res) => {
                setLoading(false)
                if (res.size > 0) {
                    setproductByCategory(res.docs.map(doc => ({ "id": doc.id, ...doc.data() })))
                } else {
                    setAlert(true)
                }
            })
    }
    useEffect(() => {
        if (!category) {
            getAllProducts()
        } else {
            getProductsByCategory()
        }
    }, [category])

    return (
        <Fragment>
            {loading &&
                <Loading />}
            {alert &&
                <Alert message={"Se ha identificado un error al procesar la solicitud"} />}
            {(!loading && !alert) &&
                <ItemList productsCategory={productByCategory} />}
        </Fragment >
    );
}

export default ItemListContainer;