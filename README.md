# Prueba práctica para puesto de Frontend Developer en Fintegra

Este repositorio contiene los 2 ejercicios de la prueba práctica realizados en el
proceso de selección para Fintegra.

## Estructura del repositorio

Este repositorio esta usando el
[boilerplate hecho por Chris Ferdinandi](https://github.com/cferdinandi/build-tool-boilerplate)
y adaptado a mis necesidades particulares. Es un serie de scripts que me permiten
construir un proyecto sencillo sin que configurar el build sea un tema complicado.

Para ver el proyecto, corra `npm install` para instalar los paquetes necesarios y
`npm start` para iniciar un servidor de desarrollo.

A grandes rasgos la estructura consiste en una carpeta de src con todo el código.
En esta hay las siguientes carpetas:

-   ´copy´: donde estarán los archivos html y en general cualquiera que se vaya a
    copiar asi tal cual al proyecto final.
-   ´js´: con los archivos de Javascript.
-   ´scss´: con los archivos de scss que se compilan a css.

## La prueba

La prueba consiste en realizar 2 ejercicios que describo a continuación.

### Figura con css y html

Realizar una cruz con HTML y CSS. Tenga en cuenta que el centro es concéntrico a
las líneas, y a su vez es necesario que por más que se redimensione la pantalla
no debe cambiar el centro de la “cruz” (Intentar no usar media queries)

### Age-predictor

Elabore un predictor de edad a través del nombre, la plataforma debe cumplir con lo siguiente:

-   La plataforma debe hacer uso del API https://agify.io/ para el cálculo de la edad

-   Debe tener mínimo dos paginas

-   Debe tener dos inputs, el primero será el nombre con el cual se quiere predecir
    la edad, y el segundo la localización (leer la documentación del api para saber el uso de la misma)

-   Cuando presione "enter” debe ejecutar la petición y evaluar los datos

-   Debe poder introducir más de un nombre para la predicción simultanea y ser muy claro
    de la manera en la que esto se efectúa

-   El campo de localización debe ser opcional

-   Si desea usar un framework debe ser Reactjs, de lo contrario debe ser elaborada en
    HTML, CSS y JS
-   Está en plena libertad de diseño y de usar las librerías que requiera y este cómod@

-   Intente hacer push al repositorio de git a medida que va avanzando en la prueba y así
    evidenciar el cómo divide el trabajo y como maneja los commits de una tarea
