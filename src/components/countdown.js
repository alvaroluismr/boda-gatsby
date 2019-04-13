import React from "react"

export default () => {

    var end = new Date('8/8/2019 6:00 PM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var texto = "algo";
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0){
            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'VIVAN LOS NOVIOS!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        texto = days + ' dias, ';
        texto += hours + ' horas, ';
        texto += minutes + ' minutos y ';
        texto += seconds + ' segundos';
        document.getElementById('countdown').innerHTML = texto; 
    }
    timer = setInterval(showRemaining, 1000);

    return (
        <div id="countdown"
            style={{
                textAlign: 'center',
                fontSize: '2rem',
                color: 'red',
                marginBottom: '0.5rem',
                textShadow: '1px 1px 3px darkred'
            }}
        >
        </div>
    )
}