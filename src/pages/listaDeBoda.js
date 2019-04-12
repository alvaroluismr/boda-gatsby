import React from "react"
import Layout from "../components/layout"
import hobbiton from "../img/hobbiton2.jpg"

export default () => (
    <Layout>
        <div style={{ backgroundColor: '#F7F7F7', border: '5px 0px solid white'}}>
            <div style={{ margin: '3rem auto', maxWidth: 650, padding: '0 1rem', textAlign: 'center' }}>
                <p>
                    El regalo es opcional, la asistencia obligatoria.
                </p>
                <p>
                    Pero si quieres tener un detalle con nosotros, que mejor regalo que nuestra luna de miel
                </p>
                <p>
                    Nº de cuenta : ES24 3035 0260 00 2621041541
                </p>
            </div>
        </div>
        <div style={{ margin: '3rem auto', maxWidth: 650, padding: '0 1rem', textAlign: 'center' }}>
            <figure style={{ marginTop: '1rem' }}>
                <img src={hobbiton} alt="Playa de la caleta" />
            </figure>
        </div>
    </Layout>
)
