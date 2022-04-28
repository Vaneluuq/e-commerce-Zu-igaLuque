# Tienda virtual DulceTarde

### Caracteristicas

- Contiene navBar con opciones clickables 
- Icono carrito de compras
- Cards con productos 

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

La data utilizada para mostrar los items de la tienda se realizaron apartir de un mock estatico, data tomada de https://fakestoreapi.com/, donde se retornan el id, titulo - descripción, precio e imagen por cada item. 

