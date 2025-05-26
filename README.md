# fechas

Este proyecto proporciona funciones sencillas para trabajar con fechas y horas en JavaScript.

## Funciones incluidas

- **getTimestamp()**  
  Devuelve el timestamp actual en milisegundos desde el 1 de enero de 1970 (Epoch).  
  Ejemplo de uso:
  ```js
  const { getTimestamp } = require('./src/index');
  console.log(getTimestamp()); //  ejemplo: 1716643200000
  ```

- **getLongTime(locale = "es-ES")**  
  Devuelve la fecha y hora actual en formato largo, localizada según el parámetro `locale`.  
  Por defecto, utiliza el formato español de España (`es-ES`).  
  Ejemplo de uso:
  ```js
  const { getLongTime } = require('./src/index');
  console.log(getLongTime()); // ejemplo: "domingo, 25 de mayo de 2025, 12:34:56 GMT+2"
  ```

## Instalación y uso

1. Clona este repositorio.
2. Instala Node.js si no lo tienes.
3. Importa las funciones desde `src/index.js` en tu proyecto.

## Contacto

Autor: **Juan Esteban Arbelaez Durango**  
Correo: je578400@gmail.com 
LinkedIn: [esteban-arbelaez-082933226](https://www.linkedin.com/in/esteban-arbelaez-082933226/)
GitHub: [EstebanDs03](https://github.com/EstebanDs03)

¡Si tienes dudas o sugerencias, no dudes en contactarme!