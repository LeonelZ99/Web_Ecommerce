import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'

export const CarritoPage = () => {
    const { listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext)
    const calcularTotal = () => {
        return listaCompras.reduce((total, item) => total + item.cantidad * item.price, 0).toFixed(2)
    }
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {listaCompras.map((item, index) => (
                        item ? (
                            <tr key={index}>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button className='btn btn-outline-primary' onClick={() => disminuirCantidad(item.id)}>-</button>
                                    <button className='btn btn-primary'>{item.cantidad}</button>
                                    <button className='btn btn-outline-primary' onClick={() => aumentarCantidad(item.id)}>+</button>
                                </td>
                                <td>
                                    <button type='button' className='btn btn-danger' onClick={() => eliminarCompra(item.id)}>Eliminar</button>
                                </td>
                            </tr>
                        ) : null
                    ))}
                </tbody>
            </table>
            <div className='d-grid gap-2'>
                <table>
                    <tr>
                        <td><b>Total:</b></td>
                        <td>{calcularTotal()}</td>
                    </tr>
                </table>
                <button className='btn btn-primary'>
                    COMPRAR
                </button>
            </div>
        </>
    )
}
