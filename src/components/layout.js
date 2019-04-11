import React from "react"
import layoutStyle from "./layout.module.css"
import anillos from "../img/anillo-small.png"
import { Link } from "gatsby"

const ListLink = props => (
    /*<li className={layoutStyle.listItem}>*/
        <Link className={layoutStyle.links} to={props.to}>{props.children}</Link>
    /*</li>*/
)

export default ({ children }) => (
    <div className={layoutStyle.todo}>
        <header className={layoutStyle.cabecera}>
            <Link to="/" className={layoutStyle.titulohead}>
                <h1 style={{ display: 'inline' }}>LA BODA DEL AÑO</h1>
                <h1>JON Y MARÍA</h1>
            </Link>
            <figure className={layoutStyle.anillos}>
                <img src={anillos} alt="Anillos" />
            </figure>
        </header>
        <nav className={layoutStyle.menu}>
            {/*<ul className={layoutStyle.listmenu}>*/}
                <ListLink to="/">Inicio</ListLink>
                <ListLink to="/presentacion/">Presentación</ListLink>
                <ListLink to="/indicaciones/">Indicaciones</ListLink>                    <ListLink to="/confirmacion/">Confirmación</ListLink>
                <ListLink to="/listaDeBoda/">Lista de Boda</ListLink>
            {/*</ul>*/}
        </nav>
        {children}
    </div>
)