// import React from 'react'
import { Iinput } from '../../../interface/Iatoms.ts'

const Input = (inputProps:Iinput) => {
    return (
        <div>
            <input
                className={inputProps.className}
                type={inputProps.type}
                ref={inputProps.ref} />
        </div>
    )
}

export default Input