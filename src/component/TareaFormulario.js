import React, { useState } from 'react';
import '../App.css';

function TareaFormulario(props)
{
    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value);
        console.log(e.target.value);
    };

    const manejarEnvio = e => {
        e.preventDefault();

        const tareaNueva = {
            id: '12345',
            texto: input,
            completada: false
        };
    };

    return (
        <form 
            className='tarea-formulario'
            onSubmit={manejarEnvio}
        >
            <input 
                className='tarea-input'
                type='text'
                placeholder='Escribe una tarea'
                name='texto'
                // Cuando ocurra un cambio en el formulario
                onChange={manejarCambio}
            />

            <button className='tarea-boton'>Agregar Tarea</button>
        </form>
    );
}

export default TareaFormulario;