import React from "react"
import Layout from "../components/layout"
import pareja from "../img/pareja.jpeg"

/*const countdown = () => {
    var end = new Date('08/08/2019 6:00 PM');

    let _second = 1000;
    let _minute = _second + 60;
    let _hour = _minute * 60;
    let _day = _hour * 24;
    let timer;

    let now = new Date();
    let distance = end - now;
    var distance = 1;
    if (distance < 0){
        //clearInterval(timer);
        return (<p>VIVAN LOS NOVIOS!!</p>);
    }

    return (<h1>Cuenta atras</h1>);
}*/

export default () => (
    <Layout>
        <div style={{ margin: '3rem auto', maxWidth: 650, padding: '0 1rem' }}>
            <p>Cuenta atras</p>
            <figure>
                <img src={pareja} alt="Jon y María" />
            </figure>
        </div>
    </Layout>
)
