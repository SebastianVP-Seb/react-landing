import React from 'react';
import Detalles from '../detalles/Detalles';
import './header.scss';

function Header() {
    return (
        <>
            <div className='header'>
                <img src="./assets/Header.svg" alt="background-header" className="header_image" />
            </div>
        <Detalles />
        </>
    );
};
export default Header;
