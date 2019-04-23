import React from "react"
import Layout from "../components/layout"
import hobbiton from "../img/hobbiton2.jpg"
import ListaBodaStyle from "./cuerpo.module.css"

export default () => (
    <Layout>
        <div className={ ListaBodaStyle.contenedortexto }>
            <div className={ ListaBodaStyle.texto }>
                <p>
                    El regalo es opcional, la asistencia obligatoria.
                </p>
                <p>
                    Pero si quieres tener un detalle con nosotros, que mejor regalo que nuestra luna de miel
                </p>
                <p>
                    <spam className={ListaBodaStyle.cuenta} >Nº de cuenta : ES24 3035 0262 00 2621041541</spam>
                </p>
            </div>
        </div>
        <div style={{ margin: '3rem auto', maxWidth: 650, padding: '0 1rem', textAlign: 'center' }}>
            <figure style={{ marginTop: '1rem' }}>
                <img className={ListaBodaStyle.hobbiton} src={hobbiton} alt="Playa de la caleta" />
            </figure>
        </div>
    </Layout>
)
