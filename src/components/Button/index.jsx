import React from 'react'

const Button = ({texto, color, children}) => {
    return (
        <>
            <input type="text" />
            <button style={{color: color}}> {texto ? texto : 'texto default'} </button>
            {children}
            
        </>
    )
}

export default Button