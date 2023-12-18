import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import '../App.css';
import Tarea from './Tarea';

function ListaTarea()
{
    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        console.log('Tarea agregada:', tarea);
    };

    return (
        <>
            <TareaFormulario />

            <div className='tareas-lista-contenedor'>
                {
                    // Para cada tarea, genera un componente Tarea
                    tareas.map
                    ( 
                        (tarea) => 
                            <Tarea 
                                texto={tarea.texto}
                                completada={tarea.completada}
                            />
                    )
                }
            </div>
        </>
    );
}

export default ListaTarea;