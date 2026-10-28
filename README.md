# Demo CI/CD con Jenkins

Aplicación web mínima en Node.js para la exposición. La página muestra un saludo y la prueba automática comprueba la función que lo genera.

## Ejecutar la aplicación

Requiere Node.js 22 o superior.

```bash
npm start
```

Abrir http://localhost:3000.

## Ejecutar las pruebas

```bash
npm test
```

## Pipeline de Jenkins

El `Jenkinsfile` está en la raíz del repositorio y define tres etapas: obtener el código, instalar dependencias y ejecutar las pruebas. Para usarlo, configurar NodeJS Plugin en Jenkins y crear una instalación de Node.js llamada exactamente `NodeJS 22` (versión 22). Después, crear un pipeline de tipo **Pipeline script from SCM**, seleccionar Git y apuntarlo a este repositorio; la ruta del script es `Jenkinsfile`.

Para la demostración del fallo, cambiar temporalmente el valor esperado en `test/greeting.test.js`, subir el cambio y mostrar que la etapa **Pruebas** falla. Luego restaurar el valor esperado y volver a subirlo.

Cambio de ejemplo para comprobar el sondeo automático de SCM en Jenkins.
