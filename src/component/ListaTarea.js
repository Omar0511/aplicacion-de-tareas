import React from 'react';
import TareaFormulario from './TareaFormulario';
import '../App.css';

function ListaTarea()
{
    return (
        <>
            <TareaFormulario />

            <div className='tareas-lista-contenedor'>
                LISTA DE TAREAS
            </div>
        </>
    );
}

export default ListaTarea;