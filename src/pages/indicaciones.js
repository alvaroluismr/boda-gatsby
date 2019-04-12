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
                            <li>Mapa</li>
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
                            <li>Mapa</li>
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
