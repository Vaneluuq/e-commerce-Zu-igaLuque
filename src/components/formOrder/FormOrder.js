import React, { useContext, useState } from 'react';
import classNames from "classnames/bind";
import form from "./FormOrder.module.css";
import { addDoc, collection, getDoc, getFirestore } from 'firebase/firestore';
import { CardContext } from '../cartContext/index';
import { useFormik } from "formik";
import { validate } from "../../functions/validateForms";
import ModalEcommerce from '../Modal/Modal';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
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
    const [modalIsOpen, setIsOpen] = useState(false);

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

    const [productOrder, setProductOrder] = useState({})

    const saveFireStore = async (itemsToAdd) => {
        const db = getFirestore()
        try {
            const lol = await addDoc(collection(db, "order"), itemsToAdd)
            getDoc(lol)
                .then((res) => {
                    if (res.exists()) {
                        setProductOrder({ "id": res.id, ...res.data() })
                    }
                })
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
                    setIsOpen(true)
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

    console.log(productOrder)

    return (
        <>
            <ModalEcommerce openModal={() => setIsOpen(true)} modalIsOpen={modalIsOpen} closeModal={() => setIsOpen(false)} >
                <div>
                    <h2 className='text-center font-medium text-lg' >Resumen de su orden</h2>
                    <span className='text-center font-medium text-sm'> El numero de su orden es: {productOrder?.id}</span>
                    {
                        productOrder?.items?.map(item => (
                            <div className="border-solid border-stone-800 border-2 rounded-md mt-3 p-2">
                                <h4>{item.item.title}</h4>
                                <h4>cantidad: {item.quantity}</h4>
                            </div>
                        ))
                    }
                    <span className='block text-center m-3' > Total de su compra: ${productOrder.total}</span>
                    <Link className='border-solid border-stone-800 border-2 rounded-md mt-3 p-1 flex items-center justify-center' to={"/"}>Seguir comprando</Link>
                </div>
            </ModalEcommerce>
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
        </>

    );
};
export default FormOrder;