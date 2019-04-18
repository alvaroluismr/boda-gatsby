import React from "react"
import Layout from "../components/layout"
//import caleta from "../img/caleta.jpg"
import Video from "../components/video"
import PresentStyle from "./cuerpo.module.css"

export default () => (
    <Layout>
        <div className={ PresentStyle.contenedortexto }>
            <div className={ PresentStyle.texto}>
                <h1>¡¡PONEROS GUAPOS QUE NOS VAMOS DE BODA!!</h1>
                <p>Y lo tenemos todo...</p>
                <p>Los trajes, el coche, el fotógrafo, el sitio, las flores...</p>
                <p>Pero nos falta lo mas importante</p>
                <h1>¡TÚ!</h1>
                <p>¡QUEREMOS CONTAR CONTIGO PARA ESTE DÍA TAN IMPORTANTE PARA NOSOTROS!</p>
                <p>
                    La ceremonia tendrá lugar el día 3 de Agosto de 2019 a las 18:00 en la Iglesia de San Francisco
                    (Cádiz), y después seguiremos celebrándolo en la Finca Alboreá (El Colorado).
                </p>
                <p>Así que, para que cerremos la lista de LO TENEMOS TODO, confímanos lo que ya sabemos:</p>
                <h1>¡¡QUE VIENES!!</h1>
            </div>
        </div>
        <div style={{ margin: '3rem auto', maxWidth: 650, padding: '0 1rem', textAlign: 'center' }}>
            {/*<figure style={{ marginTop: '1rem' }}>
                <img src={caleta} alt="Playa de la caleta" />
            </figure>*/}
            <Video
                videoSrcURL="https://www.youtube.com/embed/s6WV7vBDF84?rel=0&amp;showinfo=0"
                videoTitle="Vídeo presentación"
            />
        </div>
    </Layout>
)
