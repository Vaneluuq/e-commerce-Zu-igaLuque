import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    return ( 
        <div>
            <div>
                <h4>Bolsa de compras</h4>
                <p>Tu Bolsa de Compras está vacía. Agrega productos ahora</p>
                <Link to={"/"}>Ir a comprar</Link>
            </div>
        </div>
     );
}
 
export default Cart;