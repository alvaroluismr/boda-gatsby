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
            <div className={layoutStyle.titulohead}>
                <h1>Todos necesitamos un poco de sur para no perder el norte</h1>
            </div>
            <figure className={layoutStyle.anillos}>
                <img src={anillos} alt="Anillos" />
            </figure>
        </header>
        <nav className={layoutStyle.menu}>
            {/*<ul className={layoutStyle.listmenu}>*/}
                <ListLink to="/">Inicio</ListLink>
                <ListLink to="/presentacion/">Presentación</ListLink>
                <ListLink to="/indicaciones/">Indicaciones</ListLink>                    
                <ListLink to="/confirmacion/">Confirmación</ListLink>
                <ListLink to="/listaDeBoda/">Lista de Boda</ListLink>
            {/*</ul>*/}
        </nav>
        <div className={layoutStyle.contenido}>
        {children}
        </div>
        <footer>
            <div className={layoutStyle.contacto}>
                <p>Información de contacto:</p>
                <p>María - 678 357 767</p>
                <p>Jon - 625 652 571</p>
            </div>
            <div className={layoutStyle.autor}>
                <p>Autor:</p>
                <p>Alvaro Luis Martínez Romero (alvaroluismr@gmail.com)</p>
            </div>
        </footer>
    </div>
)