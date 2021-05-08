import React, { useState } from 'react'
import './Contador.css'

function Contador() {

    const [contador, setContador] = useState(0);
    const [mensaje, setMensaje] = useState("");

    const sumarNumerito = () => {
        setContador(contador + 1);
        setMensaje("");
    };

    const restarNumerito = () => {
        if (contador === 0) {
            setMensaje("El número no puede ser menor a 0")
            return;
        };

        setContador(contador - 1);
    };


    return (
        <div className="contenedorPrincipal">
            <div className="contenedor">
                <button className="botoncito" onClick={restarNumerito}>Restar</button>
            
                <h1 className="numerito">
                    {contador}
                </h1>
            
                <button className="botoncito" onClick={sumarNumerito}>Sumar</button>
            </div>
            <div>
                <p>{mensaje && mensaje}</p>
            </div>
        </div>
    )
}

export default Contador
