import React from 'react'
import s from "./Inicio.module.css"
import { NavLink } from 'react-router-dom';




export const Inicio = () => {
    return (
        <body className={s.Body}>
            <div className={s.Titulo}>
            <h1 className={s.H1}>PikaPoke  </h1>
            </div>
            <div className={s.container}>
                <NavLink exact to="/Home" ><button className={s.Boton} >Inicio</button></NavLink>
            </div>
        </body>
    )
}