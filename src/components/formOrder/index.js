import React, { useContext } from 'react';
import classNames from "classnames/bind";
import form from "./formOrder.module.css";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { CardContext } from '../cartContext';
import { useFormik } from "formik";
import { validate } from "../../functions/validateForms";
import Swal from 'sweetalert2'
const cx = classNames.bind(form);


const Input = ({ formik, label, id, name, type, error, value }) => {
    return (
        <>
            <label htmlFor={id} className="text-left" >{label}</label>
            <input
                id={id}
                name={name}
                type={type}
                onChange={formik.handleChange}
                value={value}
                className={cx("input-form", "p-1")}
            />
            <div>{error}</div>
        </>
    );
}

const FormOrder = () => {
    const { items, clear } = useContext(CardContext)
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: '',
            cellphone: '',

        },
        validate,
        onSubmit: values => {
            itemsToBuy(values)
        }
    });

    const totalCart = () => {
        const price = items.map(item => item?.total)
        let total = price.reduce((a, b) => a + b, 0);
        return total?.toFixed(2);
    }

    const itemsToBuy = (user) => {
        const order = {
            buyer: user,
            items: items,
            total: totalCart()
        }
        saveFireStore(order)
    }

    const saveFireStore = async (itemsToAdd) => {
        const db = getFirestore()
        try {
            const lol = await addDoc(collection(db, "order"), itemsToAdd)
            if (!!lol) {
                clear()
                Swal.fire({
                    title: 'Su orden se ha registrado con exito!',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                }).then(function () {
                    window.location = "/";
                });
            }

        } catch (e) {
            Swal.fire({
                title: 'Se ha presentado un error al generar su orden!',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
        }
    }
    return (
        <div className="flex justify-center items-center h-screen" >
            <form onSubmit={formik.handleSubmit} className="flex flex-col w-2/6" >
                <Input
                    formik={formik}
                    label={"Nombres"}
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
                    type={"number"}
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
                <button className="bg-emerald-500 rounded mt-2 p-2" type="submit">Hacer orden</button>
            </form>
        </div>
    );
};
export default FormOrder;