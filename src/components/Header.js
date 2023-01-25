import React from 'react';
import Navigation from './Navigation';
import '../styles/Header.css'

function Header({ currentPage, handlePageChange }) {
    return (
        <header className="d-flex flex-column align-items-center">
            <h1 className="display-4">Avani Muchhala</h1>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    );
}

export default Header;