// import React from 'react'

import Spinner from 'react-bootstrap/Spinner'
import { Ispinner } from '../../../interface/Iatoms.ts'

const Spinners = (spinnerProps: Ispinner) => {
    /**
     * todo : lib 감싸져있는건 interface 어떻게 정의를 하는게 좋을까?
     */
    return (
        <div style={spinnerProps.parentStyle}>
            <Spinner animation={spinnerProps.animation} variant={spinnerProps.variant} style={spinnerProps.childStyle} />
        </div>
    )
}

export default Spinners