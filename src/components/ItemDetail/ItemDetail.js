import React, { useContext, useState } from "react";
import classNames from "classnames/bind";
import itemDetails from "./ItemDetails.module.css";
import Icon from "feather-icons-react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { CardContext } from "../cartContext";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import AddItemCount from "../AddItemButton/AddItemButton";
import { currencyFormat } from "../../functions/currencyFormat";
const cx = classNames.bind(itemDetails);

const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CardContext);
  const [goToPay, setGoToPay] = useState(false);
  const [size, setSize] = useState("");
  const [counter, setCounter] = useState(1);

  const addCount = (item) => {
    setCounter(item);
  };

  const stylePayment = () => {
    if (product?.category === "clothes") {
      return "containerPaymentMen";
    } else if (product?.category === "jewelery") {
      return "containerPaymentWomen";
    } else {
      return "containerPaymentOthers";
    }
  };

  const addToShopping = (item) => {
    const data = {
      item: item,
      quantity: counter,
      total: item.price * counter,
    };
    addItem(data);
    setGoToPay(true);
  };

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <div className="flex flex-wrap py-10 px-20 h-screen">
      <div className={cx("w-6/12 flex flex-col", "containerImagen")}>
        <div className={cx("flex justify-center items-center", "heightStyle")}>
          <div>
            <img
              alt="productImage"
              className={cx("w-40", "zoom")}
              src={product?.image}
            ></img>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center px-20">
        <Typography variant="h6" sx={{ color: "info.main", marginBottom:"10px" }}>
          Detalles
        </Typography>
          <span className="text-sm"> {product?.description} </span>
        </div>
      </div>
      <div className={cx("w-6/12 flex flex-col pt-20", stylePayment())}>
        <Typography variant="h5" sx={{ color: "info.main" }}>
          DulceTarde clothes
        </Typography>
        <h2 className="text-lg pb-5 font-semibold">{product?.title} </h2>
        <span className="text-lg pb-5">{`${currencyFormat(product?.price)}`}</span>
        <div className="text-base pb-10">
          {product?.category === "clothes" ? (
            <div>
              <FormControl sx={{ width: 1 / 4 }}>
                <InputLabel id="demo-simple-select-label">Talla</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={size}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={"XS"}>XS</MenuItem>
                  <MenuItem value={"S"}>S</MenuItem>
                  <MenuItem value={"M"}>M</MenuItem>
                  <MenuItem value={"L"}>L</MenuItem>
                  <MenuItem value={"XL"}>XL</MenuItem>
                </Select>
              </FormControl>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="pb-20">
          <AddItemCount product={product} addCount={addCount} />
        </div>
        {goToPay ? (
          <Link to={"/cart"}>
            <Button variant="outlined">
              <span className="mr-2">Terminar mi compra</span>
              <Icon icon="credit-card" width="20" height="20" />
            </Button>
          </Link>
        ) : (
          <div>
            <div className={cx("flex items-center justify-around")}>
              <Button onClick={() => addToShopping(product)} variant="outlined">
                <span className="mr-2">Agregar al carrito</span>
                <Icon icon="shopping-cart" width="20" height="20" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
