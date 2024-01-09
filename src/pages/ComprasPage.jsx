import { Card } from "../components/Card"
import { useContext } from "react"
import { ProductosContext } from "../context/ProductosContext"
import { CarritoContext } from "../context/CarritoContext"


export const ComprasPage = () => {

    const { productos } = useContext(ProductosContext)
    const { listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext)

    const handleAgregar = (compra) => {
        agregarCompra(compra)
    }
    const handleEliminar = (id) => {
        eliminarCompra(id)
    }
    const handleDisminuir = (id) => {
        disminuirCantidad(id)
        const compra = listaCompras.find(compra => compra.id === id)
        if (compra.cantidad === 0) {
            eliminarCompra(id)
        }
    }
    const handleAumentar = (id) => {
        const { aumentarCantidad, dispatch } = useContext(CarritoContext);
        aumentarCantidad(id);
        const action = {
            type: '[CARRITO] Aumentar Cantidad Compra',
            payload: id,
        };
        dispatch(action);
    };

    return (
        <>
            <h1>Compras: </h1>
            <hr />
            <div className="row">
                {productos.map(producto => (
                    <div key={producto.id} className='col-sm-6 col-md-4 col-lg-3 mb-4'>
                        <Card
                            imagen={producto.image}
                            titulo={producto.title}
                            descripcion={producto.description}
                            precio={producto.price}
                            handleAgregar={() => handleAgregar(producto)}
                            handleEliminar={() => handleEliminar(producto.id)}
                            handleDisminuir={() => handleDisminuir(producto.id)}
                            handleAumentar={() => handleAumentar(producto.id)}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}
