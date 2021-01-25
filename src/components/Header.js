import React from 'react'
import logo from '../../src/img/logo.png'

const Header = () => {
    return (
        <header className="text-center bg-green-600 py-4 mb-20">
            <img className="inline-block h-20" src={logo} alt=""/>
        </header>
    )
}

export default Header
