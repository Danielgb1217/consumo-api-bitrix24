# Consumo de Servicio API Bitrix24

Este proyecto es una aplicación web que consume una API REST de Bitrix24 para listar tareas. Está desarrollado con Vue.js y utiliza Tailwind CSS para el diseño. A continuación, se presenta el paso a paso para instalar y abrir el proyecto.

## Autor

Este proyecto fue desarrollado por Daniel Andres Gonzalez.

## Instalación

Para poder ejecutar el proyecto, asegúrate de tener [Node.js](https://nodejs.org) instalado en tu computadora.

1. Clona este repositorio en tu máquina local o descárgalo como archivo ZIP.

2. Abre una terminal o línea de comandos y navega hasta la carpeta del proyecto.

3. Ejecuta el siguiente comando para instalar las dependencias:


npm install
## Ejecución
Una vez que las dependencias se hayan instalado correctamente, puedes ejecutar el proyecto usando el siguiente comando:

npm run serve

Esto iniciará el servidor de desarrollo y podrás acceder a la aplicación en tu navegador a través de la siguiente URL: http://localhost:3000.

## Estructura del Proyecto
El proyecto está organizado de la siguiente manera:
/src: Contiene el código fuente de la aplicación.
  /api: Directorio que contiene la interfaz para interactuar con la API de Bitrix24.
    tasks.js: Archivo que contiene las funciones para obtener las tareas de la API.
  /components: Directorio que contiene los componentes Vue utilizados en la aplicación.
    TasksTable.vue: Componente que muestra la tabla con las tareas.
  /views: Directorio que contiene las vistas de la aplicación.
    TasksComponent.vue: Vista principal que muestra la lista de tareas.
  main.js: Archivo de entrada de la aplicación.
  /package.json: Archivo de configuración de npm que contiene las dependencias y scripts del proyecto.


  
## API de Bitrix24
El archivo tasks.js en el directorio /api contiene una interfaz para interactuar con la API de Bitrix24 y obtener información sobre las tareas. Utiliza la biblioteca axios para realizar solicitudes HTTP a la API y obtener los datos necesarios para mostrar en la aplicación.


