import React, { useState, useEffect } from 'react';
import Item from '../item';
import { data } from "../mockdata"

const ItemList = ({ productsCategory }) => {

    return (
        <>
            <div className="flex flex-wrap justify-center mt-10">
                {productsCategory?.map(item => (
                    <Item key={item.id} data={item} />

                ))}
            </div>
        </>

    )
}

export default ItemList;