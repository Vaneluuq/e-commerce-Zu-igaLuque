import Fab from "@mui/material/Fab";
import React, { useState, useEffect } from "react";
import Icon from "feather-icons-react";

const AddItemCount = ({ product, addCount }) => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    if (counter < 1) {
      setCounter(1);
    }
    if (addCount) {
      addCount(counter);
    }
  }, [counter]);

  return (
    <>
      <div className="pb-2">
        {product?.category === "clothes"
          ? "Cuantas Prendas quieres"
          : "Escoge el numero de unidades"}
      </div>
      <div className="flex justify-center">
        <Fab
          onClick={() => setCounter(counter - 1)}
          size="small"
          color="primary"
          aria-label="add"
        >
          <Icon icon="minus" width="20" height="20" />
        </Fab>
        <div className="w-10 flex justify-center items-center text-xl">
          {counter}{" "}
        </div>
        <Fab
          onClick={() => setCounter(counter + 1)}
          size="small"
          color="primary"
          aria-label="add"
        >
          <Icon icon="plus" width="20" height="20" />
        </Fab>
      </div>
    </>
  );
};

export default AddItemCount;
