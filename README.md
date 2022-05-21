# Tienda virtual DulceTarde
El proposito del siguiente proyecto es un e-commerce que permita la venta de productos, en este caso ropa, electrodomesticos y Joyeria. 

### Caracteristicas

- Contiene navBar con opciones clickables que permiten al usuario ver todos los productos y ver los productos por categorias
- Vista donde se muestran todos los productos disponibles 
- Vista donde se le permite al usuario ver en detalle cada producto 
- Se le permite al usuario seleccionar el producto y numero de unidades a guardar en el carrito de compras.
- Se le permite al usuario una vez finalizada su compra ver un resumen de su compra con el detalle de los items seleccionados y el total 

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

La data utilizada para mostrar los items de la tienda se toma apartir de una colleccion almacenada en firebase, la data fue tomada de la api https://fakestoreapi.com/, donde se retornan la siguiente información: id, titulo, descripción, precio e imagen por cada item. 

### Routing 

Se agrega ruteo mediante el paquete de react-router-dom donde se le permite al usuario navegar a 4 rutas principales: 

- Ruta al home : ``` "/" ```
- Ruta que pemite ver los productos existentes por cada categoria: ``` "/category/id" ```
- Ruta que permite ver el detalle de cada producto: ``` "/item/id" ```
- Ruta que permite ver el resumen de la compra: ``` "/cart" ```

### context

Se hizo uso de context para almacenar los estados globales, para el caso los elementos a comprar por el usuario de los cuales se retorna la  informacion del item seleccionado y el numero de unidades a comprar. 

### Otras librerias utilizadas

#### tailwind
Framework CSS que permite aplicas estilos CSS facilmente 

#### SweetAlert2 
Se  utilizo para mostrar alertas con estilos profesionales a los usuarios de la plataforma

#### classnames
Se utiliza para concatenar facilmente multiples estilos

#### feather-icons-react
Se utiliza como fuente principal de los iconos de la aplicación 



