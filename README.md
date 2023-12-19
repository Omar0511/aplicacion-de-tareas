# Proyecto App de Tareas
- Creación del proyecto:
    - `npm create-react-app nombre-proyecto`
- Inicio del servidor
    - `npm start`

## Tecnologías
- React.js
- HTML
- CSS
- Iconos
    - `npm install react-icons --save`
    - [React Icons](react-icons.github.io/react-icons/)
- Identificadores únicos
    - uuid `npm install uuid`

### Herramientas
- Visual Studio Code

#### Descripción
-

##### Sitio
- URL [Aplicación de Tareas]()

###### Notas
- **Componente de Clase**
    - Clase de JS moderno que retorna un elemento JSX.
    - **Métodos:**
        - Función asociada a un componente de puede acceder y usar su estado.
    - _**Método render()**_
        - Método que retorna la estructura del componente JSX.
        - Es el único método obligatorio para un componente de clase en React.
    - _**Constructor**_
        - Método usado para inicializar el estado de un componente de React.
    - **Estado:**
        - Se inicializa en el constructor.
        - Actualizar el estado: `this.setState()`.
    - _**Método de Ciclo de Vida**_
        - Especiales de React usados para realizar operaciones con componentes en momentos específicos de su vida en el DOM.
    - **Características:**
        - Deben extender React.Component.
        - Deben tener un método render() para retornar un elemento de JSX.
        - Pueden recibir props si es necesario.