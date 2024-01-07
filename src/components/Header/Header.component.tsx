import React from 'react';
import HeaderTopComponent from './HeaderTopComponent/HeaderTopComponent';
import HeaderNav from './HeaderNav/HeaderNav';


function Header() {
    return (
        <nav className='sticky top-0 z-10 '>
            <HeaderTopComponent />
            <HeaderNav />
        </nav>

    )
}

export default Header
