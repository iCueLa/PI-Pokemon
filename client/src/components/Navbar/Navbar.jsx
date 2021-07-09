import React from 'react'
import { NavLink } from 'react-router-dom';
import s from "./Navbar.module.css";
import Search from '../Search/Search';

export default function NavBar() {
    return (
        <header className={s.container}>

            <nav>
                <ul className={s.List}>
                    <li className={s.ListItem}>
                        <NavLink exact to="/Home">Home</NavLink>
                        <NavLink to="/Home/Add">Crear Pokemon</NavLink>
                        <NavLink to="/Home/FavoritePokemon">Favoritos</NavLink>
                    </li>
                </ul>
            </nav>
            <div>
            </div>
            <div className={s.Search}>
                <div className={s.Searcher}>
                    <Search/>
                </div>
                    <NavLink exact to="/" ><img src="https://image.flaticon.com/icons/png/512/188/188987.png" width="30" height="30" alt="" /></NavLink>
            </div>
        </header>
    )
}