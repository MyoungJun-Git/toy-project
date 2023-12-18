// import React from 'react'

import Spinner from 'react-bootstrap/Spinner'
import { Ispinner } from '../../../interface/Iatoms.ts'

const Spinners = (spinnerProps: Ispinner) => {
    return (
        <div style={spinnerProps.parentStyle}>
            <Spinner animation={spinnerProps.animation} variant={spinnerProps.variant} style={spinnerProps.childStyle} />
        </div>
    )
}

export default Spinners