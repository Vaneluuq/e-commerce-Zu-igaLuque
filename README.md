# Tienda virtual DulceTarde
E-commerce detinado a la denta de distintos productos: ropa, electrodomesticos y joyas.

## Despliegue 
Se utilizo vercel como plataforma de despliegue. 

[E-commerce DulceTarde](https://e-commerce-zuniga-luque-5l5w3vc3r-vaneluuq.vercel.app/)


### Caracteristicas

En el e-commerce DulceTarde se muestran 3 categorias de productos: ropa, electrodomesticos y otros, donde es posible observar todos los elementos, ver los elementos por categoria y ver el detalle de cada item. El carrito de compras se encuntra dispobile al usuario donde podra observar la cantidad de productos agregados, desde alli se le redirige a una vista donde se encuentra el resumen de la compra y el total y finalizar su compra en un form donde agrega sus datos personales y se le muestra el codigo de su compra. 

### Estructura archivos del proyecto

```sh
|--src/
|--|--assets/
|--|--components/
|--|--|--cardWidget/              -> Contenedor del icono de carrito de compras
|--|--|--|--index.js
|--|--|--|--cardWidget.module.css
|--|--|--NavBar/                  -> NavBar de la aplicación
|--|--|--|--index.js
|--|--|--|--NavBar.module.css
|--|--|--ItemListContainer/       -> Contenedor de itemList
|--|--|--|--index.js
|--|--|--ItemList/                -> Agrupador de un set de componentes Item.js 
|--|--|--|--index.js
|--|--|--|--ItemList.module.css
|--|--|--Item/                    -> Componente que muestra información breve del producto
|--|--|--|--index.js
|--|--|--|--Item.module.css
```


### Data 

La data utilizada para mostrar los items de la tienda se toma apartir de una colleccion almacenada en firebase, la data fue tomada de [FakeStoreApi](https://fakestoreapi.com/) donde se retornan la siguiente información: id, titulo, descripción, precio e imagen por cada item. 

### Routing 

Se agrega ruteo mediante el paquete de react-router-dom donde se le permite al usuario navegar a 4 rutas principales: 

- Ruta al home : ``` "/" ```
- Ruta que pemite ver los productos existentes por cada categoria: ``` "/category/id" ```
- Ruta que permite ver el detalle de cada producto: ``` "/item/id" ```
- Ruta que permite ver el resumen de la compra: ``` "/cart" ```
- Ruta que permite ver el formulario de compra: ``` "/order" ```

### context

Se hizo uso de context para almacenar los estados globales, para el caso los elementos a comprar por el usuario de los cuales se retorna la  informacion del item seleccionado y el numero de unidades a comprar. A si mismo se hizo uso del localStorage para almacenar el estado de forma permanente. 

### Otras librerias utilizadas

#### tailwind
Framework CSS que permite aplicar estilos CSS facilmente 

#### SweetAlert2 
Se  utilizo para mostrar alertas con estilos profesionales a los usuarios de la plataforma. 

#### classnames
Se utiliza para concatenar multiples estilos

#### feather-icons-react
Se utiliza como fuente principal de los iconos de la aplicación 

#### material ui
Se utiliza para mantener la unidad de algunos elementos de la plataforma como botones y modales. 

#### firebase
Se utiliza como base de datos.

#### formik
Se utiliza para rescatar de manera mucho mas facil los valores, errores y validar el envio de datos. 
