import React from 'react';
import Navigation from './Navigation';

function Header({ currentPage, handlePageChange }) {
    return (
        <header className="d-flex flex-row">
            <h1>Avani Muchhala</h1>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    );
}

export default Header;