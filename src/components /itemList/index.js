import React, { useState, useEffect } from 'react';
import Item from '../item';
import { data } from "../mockdata"

const ItemList = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
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
        <>
            {loading ?
                <div style={{ height: "100vh" }} className='flex justify-center items-center text-2xl text-amber-600' > Loading... </div>
                :
                <div className="flex flex-wrap justify-center mt-10">
                    {products?.map(item => (
                        <Item key={item.id} data={item} />

                    ))}
                </div>
            }
            {
                alert && <div>Upps! Ha ocurrido un error, recarga la pagina nuevamente</div>
            }
        </>

    )
}

export default ItemList;