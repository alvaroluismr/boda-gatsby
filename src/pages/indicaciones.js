import React from "react"
import Layout from "../components/layout"
import indicacionesStyle from "./indicaciones.module.css"
import finca from "../img/finca.jpg"
import iglesia from "../img/iglesia.jpg"

export default () => (
    <Layout>
        <div style={{ margin: '3rem auto', /*maxWidth: '850px',*/ padding: '0 1rem' }}>
            <div className={indicacionesStyle.row}>
                <div className={indicacionesStyle.colum}>
                    <div className={indicacionesStyle.texto} >
                        <h1 className={indicacionesStyle.minititulo}>Ceremonia</h1>
                        <ul>
                            <li>Lugar: Iglesia de San Francisco</li>
                            <li>Hora: 18:00</li>
                            <li>Direción: Plaza San Francisco, s/n (Cádiz)</li>
                            <li><a className={indicacionesStyle.links} href="https://www.google.com/maps/dir//36.5344884,-6.2959732/@36.534016,-6.2962353,17.75z/data=!4m2!4m1!3e0">Mapa</a></li>
                        </ul>
                    </div>
                    <div className={indicacionesStyle.marcofoto}>
                        <img className={indicacionesStyle.foto} src={iglesia} alt="Iglesia San Francisco" />
                    </div>
                </div>
                <div className={indicacionesStyle.colum}>
                    <div className={indicacionesStyle.texto} >
                        <h1 className={indicacionesStyle.minititulo}>Convite</h1>
                        <ul>
                            <li>Lugar: Finca Alboreá</li>
                            <li>Hora: 20:00</li>
                            <li>Dirección: Diseminado Barrio Nuevo, 553, 11149 (Cádiz)</li>
                            <li><a className={indicacionesStyle.links} href="https://www.google.com/maps/dir//Finca+Alborea',+Diseminado+Barrio+Nuevo,+553,+11149,+C%C3%A1diz/@36.3173999,-6.0791622,16.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0xd0c37ce34f873cf:0x258e47f1dbb5e922!2m2!1d-6.0796338!2d36.3174223!3e0" >Mapa</a></li>
                        </ul>
                    </div>
                    <div className={indicacionesStyle.marcofoto}>
                        <img className={indicacionesStyle.foto} src={finca} alt="Finca Alboreá" />
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)
