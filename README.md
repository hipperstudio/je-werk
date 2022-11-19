## Todo App

Este repositorio contiene una aplicación de control diario de tareas donde se debe poder:

- Agregar tareas.
- Remover tareas.
- Editar tareas.

- Marcar tareas como pendientes.
- Marcar tareas como completadas.
- Marcar la prioridad de las tareas.

- Mostrar la cantidad de tareas en cada estado.

- Buscar tareas creadas por tîtulo (en memoria).
- Filtar tareas por estado, fecha o prioridad.
- Ordenar tareas por estado, fecha o prioridad.

- Cada tarea debe mostrarse con título, descripción, fecha/hora de creación y prioridad.

- La vista por default es "lista"

### Extras

En caso de querer incoporar mas complejidad a este ejercicio se puede agregar:

- Agregar "empty states" para cuando no hay tareas (vista de lista) y cuando no hay tareas en un estado en particular (vista de board).
- Agregar tema claro y oscuro.
- Agregar cambio de visualización (lista y tablero (puntos extras por drag and drop)).
- Login (en LS).
- Mostrar en las tareas el nombre del autor.

### Requerimientos técnicos

- Unit tests con cobertura mínima del 50%.
- Utilizar CSS, HTML y Javascript.
- No utilizar librerías externas.
- Debe ser responsive en mobile (incluyendo tablet) y desktop.
- El producto final debe estar deployado en Vercel.

### Tiempo estimado

- 1 mes aprox.

### Proceso de reviews

- Cualquier persona involucrada directamente en este proyecto debe ser parte de las code reviews.
- Los PR creados deben ser pequeños para poder analizarlos correctamente y hacer devoluciones en tiempo y forma.

## Detalles técnicos

### Requerimientos

- Node v16 o mayor.
- pnpm v7 o mayor (en caso de no tener instalado pnpm se puede instalar ejecutando `npm i -g pnpm`).

### Cómo comenzar

Abrir una terminal donde se quiere clonar el proyecto y ejecutar los siguientes comando:

- `git clone https://github.com/hipperstudio/je-werk.git`.
- `cd je-werk`.
- `pnpm i`.
- `pnpm dev`.

### Comandos útiles

- Ejecutar `pnpm dev` para levantar el proyecto (va a utilizar el puerto 5173).
- Ejecutar `pnpm lint` para correr eslint (eslint nos ayuda a detectar errores en el código).
- Ejecutar `pnpm lint-fix` para correr corregir automáticamente los errores que aparezcan (no todos los errores se pueden arreglar con este comando).
- Ejecutar `pnpm test` para correr todos los unit tests.
- Ejecutar `pnpm build` para correr el build del proyecto. Esto va a generar una carpeta llamada `dist` en el root del proyecto. Lo que se encuentra en esa carpeta es lo que finalmente se utiliza a la hora de deployar el proyecto.
