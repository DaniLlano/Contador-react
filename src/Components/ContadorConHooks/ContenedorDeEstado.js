import React from 'react'
import ContenedorNumero from './ContenedorNumero'

function ContenedorDeEstado(props) {
    return (
        <div>
            <ContenedorNumero numerito={props.numero}/>
        </div>
    )
}

export default ContenedorDeEstado
