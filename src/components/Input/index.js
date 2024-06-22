import { useState } from 'react'
import './Input.css'

const Input = (props) => {

    // let valor = '';


    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value);
    };

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.required} placeholder={props.placeholder}/>
        </div>
    );
}

export default Input;