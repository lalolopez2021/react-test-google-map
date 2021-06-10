# AXPE - Prueba Técnica Frontend - React 


## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto para su funcionamiento en tu máquina local._

### Pre-requisitos 📋


* [Google Chrome](https://www.google.com/chrome/)
* [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es&authuser=1)
* [Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Git](https://git-scm.com/)
* [Node](https://nodejs.org/es/)
* [Google Map API KEY](https://console.cloud.google.com/) 



### Instalación 🔧

_Desacarga el proyecto de GitHub_


```
git clone https://github.com/lalolopez2021/react-test-google-map.git
```

_Luego ingresas al repositorio donde has descargado el proyecto e instalas las librerías que requiere:_

```
npm install
```

_Luego colocar el **Google Maps API KEY** en "/enviroments/.env", reemplazando las "XXXXXX"_

_Luego para levanrar la aplicación:_

```
npm start
```

_Para ejecutar la prueba:_

```
npm test
```

_Para compilar para producción:_

```
npm run build
```

## Funcionalidades 🖇️

* Al iniciar muestra la ubicación actual en un mapa de google y una caja de texto para realizar la búsqueda de ubicaciones.
* Para buscar una ubicación se mostrará una lista de ubicaciones sugeridas en base al texto ingresado, visualizando en negrita el texto coincidente.
* Al seleccionar una hubicación se adicionará un marker en el mapa y se mostrará la ubicación.
* Al reducir el zoom se podrá visualizar todas las ubicaciones seleccionadas.


## Expecificación técnica 🛠️

* Desarrollado en React
* Implementación de Redux con la finalidad de gestioanr el estado de los markers
* Implementación de componentes desacoplados y control de renders
* Implementación y configuración de webpack con la finalidad de optimizar el Bundle
* Implementación de test para pruebas unitarias


## Versionado 📌

Se uso [GitHub](https://github.com/) para el versionado. Para todas las versiones disponibles (https://github.com/lalolopez2021/react-test-google-map).

## Autor ✒️

**Eduardo López Hidalgo** - *Evaluación*

## Licencia 📄

Este proyecto está bajo la Licencia (Tu Licencia) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Finalmente 🎁

El presente proyecto se ha realizado con muy buena actitud y deseo de realizar un desarrollo de calidad deseando que se cubran las espectactivas del evaluador.
