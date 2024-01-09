import React from 'react'
import { useState } from 'react'
import '../styles/card.css'
import Swal from 'sweetalert2';

export const Card = ({ id, imagen, titulo, descripcion, precio, handleAgregar, handleEliminar, handleDisminuir, handleAumentar, handleEditar }) => {

    const [added, setAdded] = useState(false)

    const clickAgregar = () => {
        handleAgregar()
        setAdded(true)

    }
    const clickQuitar = () => {
        handleEliminar()
        setAdded(false)
    }
    const clickEditar = () => {
        // Aquí se muestra la ventana de SweetAlert2
        Swal.fire({
            title: 'Editar Producto',
            html: 'Puedes personalizar el contenido de tu ventana de edición aquí.',
            icon: 'info',
            confirmButtonText: 'Aceptar',
        });

        // Aquí puedes llamar a la función de editar si es necesario
        handleEditar();
    };

    return (
        <div className='tarjeta d-flex flex-column h-100'>
            <img src={imagen} alt={titulo} className='tarjeta-imagen' />
            <div className='tarjeta-contenido'>
                <h3 className='tarjeta'>{titulo}</h3>
                <p className='tarjeta-descripcion'>{descripcion}</p>
                <p className='tarjeta-precio'>{precio}</p>

                {added
                    ? <button type='button' className='boton-quitar' onClick={clickQuitar}>
                        Quitar del Carrito
                    </button>
                    : <button type='button' className='boton-agregar' onClick={clickAgregar}>
                        Agregar Carrito
                    </button>
                }
            </div>
            <button className='btn btn-warning' onClick={clickEditar}>
                Editar
            </button>
        </div>
    )
}
