import React from 'react';


export const SearchBar = () => {
    return (
        <form className="buscador d-flex">
            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Buscar</button>
        </form>
    );
};
