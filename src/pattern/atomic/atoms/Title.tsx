// import React from 'react'

import { Ititle } from '../../../interface/Iatoms.ts'

const Title = (titleProps: Ititle) => {
    return (
        titleProps.type === 'h1' ? (
            <h1 className={titleProps.className}>{titleProps.title}</h1>
        ) : titleProps.type === 'h2' ? (
            <h2 className={titleProps.className}>{titleProps.title}</h2>
        ) : titleProps.type === 'h3' ? (
            <h3 className={titleProps.className}>{titleProps.title}</h3>
        ) : <h4 className={titleProps.className}>{titleProps.title}</h4>
    )
}
export default Title