import React, { Fragment, useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemList from '../itemList';

const ItemListContainer = () => {
    const { category = null } = useParams()
    const [productByCategory, setproductByCategory] = useState([])
    const [loading, setLoading] = useState(true)

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
        getDocs(q).then((res) => {
            setLoading(false)
            if (res.size > 0) {
                console.log(res.docs.map(doc => ({ "id": doc.id, ...doc.data() })))
                setproductByCategory(res.docs.map(doc => ({ "id": doc.id, ...doc.data() })))
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
            {loading ? <div style={{ height: "100vh" }} className='flex justify-center items-center text-2xl text-amber-600' >"loading..."</div> :
                <ItemList productsCategory={productByCategory} />}
        </Fragment>
    );
}

export default ItemListContainer;