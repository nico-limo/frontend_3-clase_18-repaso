import React, { Component } from 'react'
import "../styles/Navbar.css"
// Observamos que tenemos algo llamado withRouter
import { Link, withRouter } from 'react-router-dom'

import Search from './Search'

export default class Navbar extends Component {
    render() {
        /* ESPACIO DE TRABAJO
        Utilizar withRouter en el componente Search
         
        */
        return (
            <div className="navbar__container">
                    <a className="link" href="/"><img width="128px"  src="./images/logo.png" alt="logo" /></a>
                    <Search />
                    <a href="/login" className="link">Login</a>
            </div>
        )
    }
}
