import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export const EditarProducto = ({ productId }) => {
    const [producto, setProducto] = useState({});
    const [nuevoPrecio, setNuevoPrecio] = useState('');

    useEffect(() => {
        // Hacer una solicitud GET para obtener la información actual del producto
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(response => response.json())
            .then(data => setProducto(data));
    }, [productId]);

    const handleActualizar = () => {
        // Hacer una solicitud PUT para actualizar el precio del producto
        fetch(`https://fakestoreapi.com/products/${productId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                price: nuevoPrecio,
            }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Producto actualizado:', data);
                Swal.fire({
                    icon: 'success',
                    title: '¡Precio actualizado con éxito!',
                    text: 'El precio del producto ha sido actualizado correctamente.',
                });
                // Puedes manejar la lógica adicional después de la actualización
            })
            .catch(error => {
                console.error('Error al actualizar el precio del producto:', error);
                Swal.fire({
                    icon: 'error',
                    title: '¡Error!',
                    text: 'Hubo un error al actualizar el precio del producto.',
                });
            });
    };

    return (
        <div>
            <h2>Editar Producto</h2>
            <div>
                <label>Nuevo Precio: </label>
                <input
                    type="text"
                    value={nuevoPrecio}
                    onChange={e => setNuevoPrecio(e.target.value)}
                />
            </div>
            <div>
                <button onClick={handleActualizar}>Actualizar Precio</button>
            </div>
        </div>
    );
};

export default EditarProducto;
