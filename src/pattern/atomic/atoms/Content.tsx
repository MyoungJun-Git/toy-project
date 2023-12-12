// import React from 'react'

import { Icontent } from '../../../interface/Iatoms.ts'

const Content = (contentProps: Icontent) => {
    return (
        <p className={contentProps.className}>{contentProps.content}</p>
    )
}

export default Content