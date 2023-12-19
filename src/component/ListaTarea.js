import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import '../App.css';
import Tarea from './Tarea';

function ListaTarea()
{
    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        if (tarea.texto.trim())
        {
            tarea.texto = tarea.texto.trim();

            const tareasActualizadas = [tarea, ...tareas];

            setTareas(tareasActualizadas):
        }
    };

    return (
        <>
            <TareaFormulario onSubmit={agregarTarea} />

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