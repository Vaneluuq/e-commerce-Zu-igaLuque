import React, { useContext, useState } from "react";
import classNames from "classnames/bind";
import form from "./FormOrder.module.css";
import { addDoc, collection, getDoc, getFirestore } from "firebase/firestore";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import { CardContext } from "../cartContext/index";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import { validate } from "../../functions/validateForms";
import TextField from "@mui/material/TextField";
import ModalEcommerce from "../Modal/Modal";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const cx = classNames.bind(form);

const Input = ({ formik, id, type, error, value, label }) => {
  return (
    <>
      <TextField
        required
        id={id}
        type={type}
        onChange={formik.handleChange}
        label={label}
        defaultValue={value}
      />
      <div>{error}</div>
    </>
  );
};

const FormOrder = () => {
  const { items, clear } = useContext(CardContext);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [productOrder, setProductOrder] = useState({});

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      cellphone: "",
    },
    validate,
    onSubmit: (values) => {
      setLoading(true);
      itemsToBuy(values);
    },
  });

  const totalCart = () => {
    const price = items.map((item) => item?.total);
    let total = price.reduce((a, b) => a + b, 0);
    return total?.toFixed(2);
  };

  const itemsToBuy = (user) => {
    const order = {
      buyer: user,
      items: items,
      total: totalCart(),
    };
    saveFireStore(order);
  };

  const saveFireStore = async (itemsToAdd) => {
    const db = getFirestore();
    try {
      const lol = await addDoc(collection(db, "order"), itemsToAdd);
      getDoc(lol).then((res) => {
        if (res.exists()) {
          setProductOrder({ id: res.id, ...res.data() });
        }
      });
      if (!!lol) {
        clear();
        setLoading(false);
        Swal.fire({
          title: "Su orden se ha registrado con exito!",

          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        }).then(function () {
          setIsOpen(true);
        });
      }
    } catch (e) {
      Swal.fire({
        title: "Se ha presentado un error al generar su orden!",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    }
  };

  return (
    <>
      <ModalEcommerce
        openModal={() => setIsOpen(true)}
        modalIsOpen={modalIsOpen}
        closeModal={() => setIsOpen(false)}
      >
        <div className="text-center">
          <Typography variant="h5" sx={{ color: "info.main" }}>
            Resumen de su orden
          </Typography>
          <span className="text-center font-medium text-sm">
            Su orden se ha generado bajo el numero: {productOrder?.id}
          </span>
          {productOrder?.items?.map((item) => (
            <Card sx={{ minWidth: 275, my: 2 }}>
              <h4>{item.item.title}</h4>
              <h4>Cantidad: {item.quantity}</h4>
            </Card>
          ))}
          <Typography variant="h6" sx={{ my: 2 }}>
            Total de su compra: ${productOrder.total}
          </Typography>
          <Link to={"/"}>
            <Button variant="outlined" sx={{ width: "100%" }}>
              Seguir comprando
            </Button>
          </Link>
        </div>
      </ModalEcommerce>
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={formik.handleSubmit} className="flex flex-col w-2/6">
          <Input
            formik={formik}
            label={"Nombre"}
            id={"firstName"}
            name={"firstName"}
            type={"text"}
            value={formik.values.firstName}
            error={formik.errors.firstName ? formik.errors.firstName : null}
          />
          <br />
          <Input
            formik={formik}
            label={"Apellidos"}
            id={"lastName"}
            name={"lastName"}
            type={"text"}
            value={formik.values.lastName}
            error={formik.errors.lastName ? formik.errors.lastName : null}
          />
          <br />
          <Input
            formik={formik}
            label={"Celular"}
            id={"cellphone"}
            name={"cellphone"}
            type={"tel"}
            value={formik.values.cellphone}
            error={formik.errors.cellphone ? formik.errors.cellphone : null}
          />
          <br />
          <Input
            formik={formik}
            label={"Email"}
            id={"email"}
            name={"email"}
            type={"email"}
            value={formik.values.email}
            error={formik.errors.email ? formik.errors.email : null}
          />
          <Button type="submit" sx={{ mt: 2, p: 2 }} variant="outlined">
            {loading ? <CircularProgress /> : "Hacer orden"}
          </Button>
        </form>
      </div>
    </>
  );
};
export default FormOrder;
