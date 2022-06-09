import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { CardContext } from "../cartContext";
import Button from "@mui/material/Button";
import Icon from "feather-icons-react";
import { currencyFormat } from "../../functions/currencyFormat";

const Cart = () => {
  const { items, removeItem } = useContext(CardContext);

  const totalCart = () => {
    const price = items.map((item) => item?.total);
    let total = price.reduce((a, b) => a + b, 0);
    return total?.toFixed(2);
  };

  useEffect(() => {
    totalCart();
  }, []);

  return (
    <div className="p-6">
      {items.length > 0 ? (
        <div className="flex items-center flex-col">
          <table className="table-auto border-collapse w-8/12 border-2 border-red-400 ">
            <thead>
              <tr className="bg-red-400">
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="border-2 border-red-400">
              {items.map((item) => (
                <tr className="leading-10">
                  <td>{item?.item?.title}</td>
                  <td>{currencyFormat(item?.item?.price)}</td>
                  <td>{item?.quantity}</td>
                  <td className="flex items-center justify-around ">
                    {" "}
                    {currencyFormat(item?.total)}
                  </td>
                  <td>
                    <span
                      className="cursor-pointer"
                      onClick={() => removeItem(item?.item?.id)}
                    >
                      <Icon icon="x" width="20" height="20" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="bg-teal-100 rounded-md my-7 p-5">
            <h2 className="text-xl font-medium mb-2">Resumen de la compra</h2>
            <div className="text-xl font-semibold mb-2 text-red-500">
              Total: {currencyFormat(totalCart())}
            </div>
            <div className="flex flex-col">
              <Link to={"/order"} className="underline">
                Finalizar compra
              </Link>
              <Link to={"/"} className="underline">
                Seleccionar mas productos
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center  ">
          <Typography variant="h5" sx={{ color: "info.main", marginY: "10px" }}>
            Bolsa de compras
          </Typography>
          <span>Tu Bolsa de Compras está vacía. Agrega productos ahora</span>
          <Link to={"/"}>
            <Button type="submit" sx={{ mt: 2 }} variant="outlined">
              Ir a comprar
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
