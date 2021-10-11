import React from 'react'
import './Button.css'

export default props => {
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''
    
    return (
        <button 
            // só avaliará o segundo termo se o evento de click tiver sido
            // configurado no componente na classe Calculator
            // props.label equivale a e.target.innerHTML
            // o segundo termo é utilizado para chamar a função de clique
            onClick={e => props.click && props.click(props.label)}
            className={classes}>
            {props.label}
        </button>
    )
}