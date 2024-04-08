//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
// include your styles into the webpack bundle
import "../styles/index.css";
import Home from "./component/home";

function SimpleCounter(props){
    return (

        <div className= "CajaContador">
            <div className= "cuadros">
                <i className="fas fa-clock"></i>
            </div>
            <div className= "four">{props.digitFour % 10}</div>
            <div className= "three">{props.digitThree % 10}</div>
            <div className= "two">{props.digitTwo % 10}</div>
            <div className= "one">{props.digitOne % 10}</div>
        </div>);
}
SimpleCounter.proptypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number,
};

let counter = 0;
setInterval(function(){
    const four = Math.floor(counter/10000);
    const three = Math.floor(counter/1000);
    const two = Math.floor(counter/100);
    const one = Math.floor(counter/10);
    counter ++;
   

    //render your react application
    ReactDOM.render(< SimpleCounter digitOne={one} digittwo={two} digitthree={three} digitfour={four} />, document.querySelector("#app"));

},1000);
