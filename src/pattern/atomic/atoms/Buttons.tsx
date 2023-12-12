// import React from 'react'
import Button from 'react-bootstrap/Button'
import { Ibuttons } from '../../../interface/Iatoms.ts'

const Buttons = (buttonProps: Ibuttons) => {
    return (
        <Button
            hidden={buttonProps.hidden}
            className={buttonProps.className}
            variant={buttonProps.variant}
            onClick={buttonProps.onClick}
        >
            {buttonProps.children}
        </Button>
    )
}

export default Buttons