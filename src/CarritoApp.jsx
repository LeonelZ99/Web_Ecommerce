import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { ComprasPage } from './pages/ComprasPage';
import { CarritoPage } from './pages/CarritoPage';
import { ProductosProvider } from './context/ProductosProvider';
import { CarritoProvider } from './context/CarritoProvider';
import { EditarProducto } from './context/EditarProducto';
import './styles/styles.css';

export const CarritoApp = () => {
    return (
        <ProductosProvider>
            <CarritoProvider>
                <NavBar />
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <Routes>
                                <Route path='/' element={<ComprasPage />} />
                                <Route path='/carrito' element={<CarritoPage />} />
                                <Route path='/producto/:productId/editar' element={<EditarProducto />} />
                                <Route path='/*' element={<Navigate to='/' />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </CarritoProvider>
        </ProductosProvider>
    );
};