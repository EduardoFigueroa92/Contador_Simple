//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
// include your styles into the webpack bundle
import "../styles/index.css";
//import Home from "./component/home";

function SimpleCounter(props) {


    const parar = () => {
        stop=1
    }
    const reanudar = () => {
        stop=0
    }
    const reset = () => {
        counter=0
        stop=0
    }


    return (

        <div className="CajaContador">
            <div className="cuadros">
                <i className="fas fa-clock"></i>
            </div>
            <div className="four">{props.digitFour % 10}</div>
            <div className="three">{props.digitThree % 10}</div>
            <div className="two">{props.digitTwo % 10}</div>
            <div className="one">{props.digitOne % 10}</div>
            <span id="botones">
                <button onClick={parar} className="btn">Parar</button>
                <button onClick={reanudar} className="btn">Reanudar</button>
                <button onClick={reset} className="btn">Reset</button>
            </span>
        </div>);
}


SimpleCounter.proptypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number,
};

let counter = 0;
let stop=0;
setInterval(function () {
    if(stop == 0){
        const four = Math.floor(counter / 1000);
        const three = Math.floor(counter / 100);
        const two = Math.floor(counter / 10);
        const one = Math.floor(counter);
        counter++;
        

        //render your react application
        ReactDOM.render(< SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />, document.querySelector('#app'));
    }
}, 1000);
