import { useState, createContext, useEffect } from "react";
import Swal from 'sweetalert2'

export const CardContext = createContext({
    items:
        [{
            item: {},
            quantity: 0
        }],
    addItem: () => { },
    removeItem: () => { },
    clear: () => { },
})

const CardProvider = ({ children }) => {
    const [items, setItems] = useState([])
    const addItem = (item) => {
        const itemsInCart = items.map(item => item.item.id)
        const productInCart = itemsInCart.includes(item.item.id)
        if (!productInCart) {
            setItems(old => [...old, item])
        } else {
            Swal.fire({
                title: 'Este producto ya se encuentra dentro de tu carrito de compras!',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
        }
    }
    const removeItem = (id) => {
        const newItems = [...items]
        const index = newItems.indexOf(id)
        newItems.splice(index, 1)
        setItems(newItems)
    }
    const clear = () => {
        setItems([])
    }

    useEffect(() => {
        const cartItemsData = JSON.parse(localStorage.getItem('cartItems'))

        if (cartItemsData) {
            setItems(cartItemsData)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(items))
    }, [items])

    const context = {
        items,
        addItem,
        removeItem,
        clear
    }
    return (
        <CardContext.Provider value={context}>
            {children}
        </CardContext.Provider>
    )
}
export default CardProvider





