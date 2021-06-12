# Web donde se buscan articulos provenientes de la api de mercado libre

Este proyecto esta desarrollado en React typescript donde se integra con Redux para el manejo del storage

## Available Scripts

En el directorio del proyecto, puede ejecutar:

### `npm start`

Ejecuta la aplicación en el modo de desarrollo. \ Abra [http: // localhost: 3000http: // localhost: 3000) para verla en el navegador.

### `npm test`

Inicia pruebas render de los componetes

### `npm run build`

Construye la aplicación para producción en la carpeta `build`

# Estructura de carpetas y componentes

    idex=> inicio de la aplicación configuramos redux para manejar el storage
    App=> Componente donde montamos el manejo de las rutas y el layout de la aplicación
    componetes=> Carpeta contenedora de los compenentes
      Home=>Inicio de la aplicación
      Layaout=> Manejador de las vistas de todods los componentes
      Items=> Componete para pintar el resultado de la busqueda y el detalle del producto
      BuyButton=> Componente Button que se muestra el el detalle del producto
      BreadCrumb=> Componete para mostrar las categorias de los resusltados protuctos y detalle
      Loader=> Componente que se muestra mientras se pinta el resultado
    redux Carpeta contenedora de los typos,aciones y reducers del storage
