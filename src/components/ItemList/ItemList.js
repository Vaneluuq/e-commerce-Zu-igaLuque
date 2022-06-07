import React from 'react';
import Item from '../Item/Item';

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