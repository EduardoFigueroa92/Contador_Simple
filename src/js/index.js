//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
// include your styles into the webpack bundle
import "../styles/index.css";
//import Home from "./component/home";

function SimpleCounter(props) {


    const parar = () => {
        stop = true
    }
    const reanudar = () => {
        stop = false
    }
    const reset = () => {
        counter = 0
        stop = false
        atras = false
        document.getElementById('atras').value = null
    }

    const regresiva = () => {
        if (document.getElementById('atras').value.match(/^[0-9]+$/)) {
            counter = document.getElementById('atras').value
            atras = true
        }
    }


    return (
        <span id="caja">
            <div className="cajaContador">
                <div className="elem">
                    <i className="fas fa-clock"></i>
                </div>
                <div className="elem">{props.digitFour % 10}</div>
                <div className="elem">{props.digitThree % 10}</div>
                <div className="elem">{props.digitTwo % 10}</div>
                <div className="elem">{props.digitOne % 10}</div>

            </div>
            <div id="botones">
                <button onClick={parar} className="btn">Parar</button>
                <button onClick={reanudar} className="btn">Reanudar</button>
                <button onClick={reset} className="btn">Reset</button>
            </div>

            <div className="regresiva">
                <input type="text" id="atras" />
            </div>
            <button onClick={regresiva} className="btn">Cuenta atrás</button>

        </span>


    );
}


SimpleCounter.proptypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number,
};

let counter = 0;
let stop = false;
let atras = false;
setInterval(function () {
    if ( stop== false  && atras == false ) {
        const four = Math.floor(counter / 1000);
        const three = Math.floor(counter / 100);
        const two = Math.floor(counter / 10);
        const one = Math.floor(counter);
        counter++;


        //render your react application
        ReactDOM.render(< SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />, document.querySelector('#app'));
    }
    else if ( stop == false && atras == true ) {
        const four = Math.floor(counter / 1000);
        const three = Math.floor(counter / 100);
        const two = Math.floor(counter / 10);
        const one = Math.floor(counter);
        counter--;


        //render your react application
        ReactDOM.render(< SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />, document.querySelector('#app'));
    }
}, 1000);


