import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { data } from "../mockdata";
import ItemList from '../itemList';

const ItemListContainer = () => {
    const { category } = useParams()
    const [productByCategory, setproductByCategory] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (
            async () => {
                const getCategory = await getProductsByCategory()
                if (getCategory) {
                    setLoading(false)
                    if (getCategory.length > 0) {
                        setproductByCategory(getCategory)
                    } else {
                        setproductByCategory(data)
                    }
                }
            }
        )()
    }, [category])

    const getProductsByCategory = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data.filter(r => r.category == category));
            }, 2000);
        });
    }

    return (
        <Fragment>
            {loading ? <div style={{ height: "100vh" }} className='flex justify-center items-center text-2xl text-amber-600' >"loading..."</div> :
                <ItemList productsCategory={productByCategory} />}
        </Fragment>
    );
}

export default ItemListContainer;