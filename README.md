## Prueba técnica  
Esta es una prueba técnica para demostrar los conocimientos de front end sobre: HTML, CSS, TypeScript, React (Next js), Test. 
Toda la aplicación fue hecha con next js, "CSS" puro sin "Sass" e implementando typeScript en todo menos en los test. 

  

## Secciones de la pagina 
-Login: La página empieza por un login donde se tiene que iniciar sesión con una cuenta ya creada. 

const cuenta1 = { 
email:"grupoASD@gmail.com", 
password:"Rjs2022*" 

} 

const cuenta2 = { 
email::"aramisjaime48@gmail.com", 
password:"Aramis09" 

} 

-Tabla: Una vez iniciada la session se le redirige al usuario a una nueva página donde se visualiza una tabla de criptomonedas.  
Esta solo es accesible si el usuario este logueado. 

  
## Como iniciar el proyecto? 
1) Es necesario que el repositorio se descargue en su computadora. 

2) Una vez abierta la carpeta en un editor de código, tenemos que ejecutar "npm install" o "yarn add" para la instalación de las dependencias. Es importante estar en la carpeta raíz 

3) Para poder correr el proyecto se usa el comando "npm run dev" o su equivalente en yarn 

4) Para correr los test se tiene ejecutar "npm test " o su equivalente en yarn. 

5) Una vez hecho todo esto ya se puede utilizar de forma local la aplicación web. En la consola usted podrá ver el puerto en el que la aplicación corre, sin embargo, por defecto suele ser www.localhost:3000 

## Porque la elección del test ?  
Se elegio para testear una funcionalidad que sirve para verificar el login del usuario. La funcionalidad verifyDataUserMock es una simulación para poder testear de forma más sencilla la original (src/services/loginServices.ts). La importancia de esto es que si el usuario no puede iniciar sesión no puede acceder a el contenido, por lo que es importante que tenga acceso.  

Si la temática de la página fuera diferente como un ecommerce, capaz hubiera priorizado más la acción de comprar y no tanto el login, todo depende del objetivo del proyecto. 
